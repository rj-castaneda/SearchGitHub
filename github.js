class Github {
  constructor() {
    this.client_id = '4532e3022538ef2fc980';
    this.client_secret = 'a88f491e427eb9d444dbf3882ee878a7bec90a64';
    this.repos_count = 5;
    this.repos_sort = 'created_at: asc';
  }

  // Get users
  async getUser(user) {
    const profileRes = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`,
    );

    const repoRes = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`,
    );

    const profile = await profileRes.json();
    const repos = await repoRes.json();

    return {
      profile: profile,
      repos: repos,
    };
  }
}
