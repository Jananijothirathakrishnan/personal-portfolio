const express = require('express');
const router = express.Router();
const axios = require('axios');

// Fallback mock stats if GitHub API fails
const mockStats = {
  username: 'Jananijothirathakrishnan',
  publicRepos: 12,
  followers: 8,
  totalStars: 4,
  contributions: 320,
  languages: ['Java', 'JavaScript', 'HTML/CSS', 'C++']
};

// @route   GET api/github
// @desc    Get github stats
// @access  Public
router.get('/', async (req, res) => {
  try {
    const username = 'Jananijothirathakrishnan';
    
    // We can fetch data with a timeout so it doesn't hang if offline
    const userPromise = axios.get(`https://api.github.com/users/${username}`, { timeout: 3000 });
    const reposPromise = axios.get(`https://api.github.com/users/${username}/repos?per_page=100`, { timeout: 3000 });
    
    const [userRes, reposRes] = await Promise.all([userPromise, reposPromise]);
    
    const repos = reposRes.data;
    
    // Calculate stars
    const stars = repos.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);
    
    // Calculate top languages
    const languageCounts = {};
    repos.forEach(repo => {
      if (repo.language) {
        languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
      }
    });
    
    const languages = Object.entries(languageCounts)
      .sort((a, b) => b[1] - a[1])
      .map(entry => entry[0])
      .slice(0, 4);

    res.json({
      username,
      publicRepos: userRes.data.public_repos,
      followers: userRes.data.followers,
      totalStars: stars,
      contributions: 280, // Mocked contributions since Github GraphQL API requires authorization token
      languages: languages.length > 0 ? languages : mockStats.languages
    });
  } catch (err) {
    console.log('GitHub API error, returning premium cached fallbacks:', err.message);
    res.json(mockStats);
  }
});

module.exports = router;
