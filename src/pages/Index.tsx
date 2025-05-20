
import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const vulnerabilities = [
    {
      title: "SQL Injection",
      description: "Learn how attackers can inject malicious SQL code",
      path: "/login",
      color: "border-blue-500"
    },
    {
      title: "Cross-Site Scripting (XSS)",
      description: "Discover how JavaScript can be injected into web pages",
      path: "/message-board",
      color: "border-green-500"
    },
    {
      title: "Insecure File Upload",
      description: "Explore the dangers of unrestricted file uploads",
      path: "/file-upload",
      color: "border-yellow-500"
    },
    {
      title: "Cross-Site Request Forgery",
      description: "See how attackers can force users to perform actions",
      path: "/user-profile",
      color: "border-purple-500"
    },
    {
      title: "Insecure Direct Object References",
      description: "Learn about unauthorized access to resources",
      path: "/admin",
      color: "border-orange-500"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 p-4 border border-red-500 rounded-md bg-red-500/10">
        <div className="flex items-start">
          <AlertCircle className="h-6 w-6 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
          <div>
            <h2 className="text-lg font-bold text-red-500">Security Warning</h2>
            <p className="mt-1 text-gray-300">
              This website is <strong>intentionally vulnerable</strong> and designed for educational purposes only.
              Never deploy this code in a production environment or use it to store sensitive information.
              The vulnerabilities included here represent common security flaws that developers should learn to prevent.
            </p>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-hacker-red mb-6 glitch">Vulnerable Web Application</h1>
      
      <p className="mb-6 text-gray-300">
        This application demonstrates various common web vulnerabilities, allowing security enthusiasts, 
        developers, and students to practice identifying and exploiting these vulnerabilities in a safe, controlled environment.
      </p>

      <h2 className="text-xl font-semibold mb-4 text-hacker-green terminal-text">$ Available Vulnerabilities:</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {vulnerabilities.map((vulnerability, index) => (
          <Card key={index} className={`bg-black/50 border-l-4 ${vulnerability.color} hover:bg-black/70 transition-colors`}>
            <CardHeader className="pb-2">
              <CardTitle className="text-white">{vulnerability.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400 mb-4">{vulnerability.description}</CardDescription>
              <Link 
                to={vulnerability.path}
                className="inline-flex items-center text-sm font-medium text-hacker-red hover:text-hacker-red/80"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;
