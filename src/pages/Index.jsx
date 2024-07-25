import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Home, Settings, User, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Index() {
  return (
    <div className="container mx-auto p-4 flex flex-col min-h-screen">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">My Application</h1>
        <nav className="mt-4">
          <Button variant="ghost" className="mr-2">
            <Home className="mr-2 h-4 w-4" />
            Home
          </Button>
          <Button variant="ghost" className="mr-2">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Button>
          <Button variant="ghost">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </nav>
      </header>

      <main className="flex-grow">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Welcome</CardTitle>
            <CardDescription>This is a bare-bones application you can build upon.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Start by modifying this component or adding new ones to create your desired application.</p>
          </CardContent>
          <CardFooter>
            <Button>Get Started</Button>
          </CardFooter>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Feature 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Description of feature 1 goes here.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Description of feature 2 goes here.</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <form className="space-y-4">
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Input type="text" placeholder="Message" />
            <Button type="submit">Send</Button>
          </form>
        </div>
      </main>

      <footer className="mt-16 bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm text-gray-600">We are a company dedicated to providing excellent services and products to our customers.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Home</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">About</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Services</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <p className="text-sm text-gray-600">123 Main St, Anytown, USA 12345</p>
              <p className="text-sm text-gray-600">Phone: (123) 456-7890</p>
              <p className="text-sm text-gray-600">Email: info@myapplication.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900"><Facebook size={20} /></a>
                <a href="#" className="text-gray-600 hover:text-gray-900"><Twitter size={20} /></a>
                <a href="#" className="text-gray-600 hover:text-gray-900"><Instagram size={20} /></a>
                <a href="#" className="text-gray-600 hover:text-gray-900"><Linkedin size={20} /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">&copy; 2023 My Application. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}