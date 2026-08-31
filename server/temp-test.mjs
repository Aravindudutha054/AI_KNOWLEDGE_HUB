const base = 'http://127.0.0.1:5000';

(async () => {
  const loginRes = await fetch(base + '/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      employeeId: 'ITA001',
      password: 'Admin@123',
      role: 'admin',
      department: 'IT'
    })
  });

  const loginJson = await loginRes.json();
  console.log(JSON.stringify({ loginStatus: loginRes.status, tokenPrefix: loginJson.data?.token?.slice(0, 20) }, null, 2));

  const res = await fetch(base + '/api/departments/dashboard', {
    headers: { Authorization: 'Bearer ' + loginJson.data.token }
  });

  console.log('dashboardStatus', res.status);
  console.log(await res.text());
})();
