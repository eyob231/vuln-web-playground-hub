
import React, { useState } from 'react';
import { AlertCircle, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const SqlInjection = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [queryResult, setQueryResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const { toast } = useToast();

  // This simulates a vulnerable SQL query
  const handleLogin = () => {
    // Simulated SQL query: "SELECT * FROM users WHERE username='${username}' AND password='${password}'"
    const simulatedQuery = `SELECT * FROM users WHERE username='${username}' AND password='${password}'`;
    setQueryResult(simulatedQuery);

    // Detect successful SQL injection
    if (
      username.includes("'") && 
      (username.includes("--") || 
       username.includes("#") || 
       username.toLowerCase().includes("or 1=1") || 
       username.toLowerCase().includes("or true"))
    ) {
      setError(null);
      toast({
        title: "SQL Injection Successful!",
        description: "You've successfully bypassed the authentication.",
        variant: "destructive",
      });
    } else {
      setError("Invalid username or password");
    }
  };

  const toggleHint = () => {
    setShowHint(!showHint);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-hacker-red">SQL Injection Vulnerability</h1>
      
      <div className="mb-8 p-4 border border-yellow-500 rounded-md bg-yellow-500/10">
        <div className="flex items-start">
          <Info className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
          <div>
            <h2 className="text-lg font-bold text-yellow-500">What is SQL Injection?</h2>
            <p className="mt-1 text-gray-300">
              SQL Injection is a code injection technique that exploits vulnerabilities in applications
              that construct SQL queries using user-provided input without proper sanitization.
              Attackers can inject malicious SQL code that can read, modify, or delete database data.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-black/50 border border-blue-500">
          <CardHeader>
            <CardTitle className="text-white">Login Form (Vulnerable)</CardTitle>
            <CardDescription className="text-gray-400">
              This form is deliberately vulnerable to SQL injection attacks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-400">Username</label>
                <Input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  className="bg-gray-900 border-gray-700"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-400">Password</label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="bg-gray-900 border-gray-700"
                />
              </div>
              
              {error && (
                <div className="text-red-500 text-sm">
                  {error}
                </div>
              )}
              
              <Button type="submit" variant="destructive" className="w-full">
                Login
              </Button>
              
              <Button 
                type="button" 
                variant="outline" 
                onClick={toggleHint} 
                className="w-full border-yellow-500 text-yellow-500 hover:bg-yellow-500/20"
              >
                {showHint ? "Hide Hint" : "Show Hint"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {showHint && (
            <Card className="bg-yellow-500/10 border border-yellow-500">
              <CardHeader className="pb-2">
                <CardTitle className="text-yellow-500">Hint</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-2">Try these SQL injection payloads:</p>
                <ul className="list-disc pl-5 text-gray-400 space-y-2">
                  <li><code className="terminal-text">admin' --</code></li>
                  <li><code className="terminal-text">admin' OR '1'='1' --</code></li>
                  <li><code className="terminal-text">' OR 1=1 #</code></li>
                </ul>
              </CardContent>
            </Card>
          )}

          {queryResult && (
            <Card className="bg-black border border-gray-700">
              <CardHeader className="pb-2">
                <CardTitle className="text-white">Generated SQL Query</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto terminal-text text-xs">
                  {queryResult}
                </pre>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <Card className="mt-6 bg-black/50 border border-red-500">
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
            <span>Prevention Techniques</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li>Use parameterized queries or prepared statements</li>
            <li>Apply input validation and sanitization</li>
            <li>Implement the principle of least privilege for database accounts</li>
            <li>Use ORM (Object-Relational Mapping) libraries that handle escaping automatically</li>
            <li>Implement WAF (Web Application Firewall) to filter malicious requests</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default SqlInjection;
