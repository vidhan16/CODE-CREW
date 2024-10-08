"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, FileText, Share2, Lock, Unlock, Eye, Sun, Moon } from "lucide-react"

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.toggle("dark", isDarkMode)
  }, [isDarkMode])
  const [file, setFile] = useState<File>();
  const [url, setUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const uploadFile = async () => {
    try {
      if (!file) {
        alert("No file selected");
        return;
      }

      setUploading(true);
      const data = new FormData();
      data.set("file", file);
      const uploadRequest = await fetch("/api/files", {
        method: "POST",
        body: data,
      });
      const ipfsUrl = await uploadRequest.json();
      setUrl(ipfsUrl);
      console.log(url);
      setUploading(false);
    } catch (e) {
      console.log(e);
      setUploading(false);
      alert("Trouble uploading file");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target?.files?.[0]);
  };
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50 to-white'}`}>
      <header className={`${isDarkMode ? 'bg-black/50' : 'bg-white/50'} backdrop-blur-lg p-4 sticky top-0 z-10`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Lock className={`w-8 h-8 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <span className={`font-bold text-2xl ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>EVAULT</span>
          </div>
          <nav className="flex items-center space-x-4">
            <Button variant="ghost" className={isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}>Home</Button>
            <Button variant="ghost" className={isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}>FAQ</Button>
            <Button variant="ghost" className={isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}>Share</Button>
            <Switch
              checked={isDarkMode}
              onCheckedChange={setIsDarkMode}
              className="ml-4"
              icon={isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            />
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-6 space-y-8">
        <h1 className={`text-4xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Welcome to EVAULT</h1>
        
        <Tabs defaultValue="upload" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="upload">Upload Documents</TabsTrigger>
            <TabsTrigger value="manage">Manage Documents</TabsTrigger>
            <TabsTrigger value="share">Share Documents</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upload">
            <Card className={isDarkMode ? 'bg-gray-800/50 backdrop-blur-sm border-gray-700' : 'bg-white/50 backdrop-blur-sm border-gray-200'}>
              <CardHeader>
                <CardTitle className={isDarkMode ? 'text-white' : 'text-gray-800'}>Upload Document Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Land Certificate', 'Aadhar Card', 'Birth Certificate', '10th Mark Sheet'].map((category) => (
                    <div key={category} className={`${isDarkMode ? 'bg-gray-700/50 hover:bg-gray-600/50' : 'bg-gray-100 hover:bg-gray-200'} p-4 rounded-lg text-center transition-colors cursor-pointer`}>
                      <FileText className={`w-12 h-12 mx-auto mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                      <p className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{category}</p>
                    </div>
                  ))}
                </div>
                <>
                {/* <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            width: '300px',
            margin: '0 auto',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#f9f9f9'
        }}> */}
            <input type="file" onChange={handleChange}
              style={{
                // textAlign: 'center',
                // height: '40px', // Adjust height for better appearance
                marginBottom: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                padding: '15px',
                width: '100%',
                transition: 'border-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease',
            }} 
            onFocus={(e) => {
                e.target.style.borderColor = '#007bff';
                e.target.style.transform = 'scale(1.02)';
                e.target.style.boxShadow = '0 0 5px rgba(0, 123, 255, 0.5)';
            }}
            onBlur={(e) => {
                e.target.style.borderColor = '#ccc';
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
            }}
          //   onFocus={(e) => {
          //     e.target.style.borderColor = '#007bff';
          //     e.target.style.transform = 'scale(1.02)';
          // }}
          // onBlur={(e) => {
          //     e.target.style.borderColor = '#ccc';
          //     e.target.style.transform = 'scale(1)';
          // }}
             />
            <button disabled={uploading} onClick={uploadFile}
               style={{
                backgroundColor: uploading ? '#ccc' : '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                padding: '10px 15px',
                cursor: uploading ? 'not-allowed' : 'pointer',
                transition: 'background-color 0.3s ease',
                width: '100%'
            }}
            >
                {uploading ? "Uploading..." : "Upload"}
            </button>
            </>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="manage">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {['Land Certificate', 'Class 10th Certificate'].map((doc) => (
                <Card key={doc} className={isDarkMode ? 'bg-gray-800/50 backdrop-blur-sm border-gray-700' : 'bg-white/50 backdrop-blur-sm border-gray-200'}>
                  <CardContent className="flex items-center p-6">
                    <div className={`${isDarkMode ? 'bg-blue-500/20' : 'bg-blue-100'} p-4 rounded-full mr-4`}>
                      <FileText className={`w-12 h-12 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    </div>
                    <div>
                      <h3 className={`font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{doc}</h3>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>DocId: XXX</p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Address: 0x0...a34</p>
                      <Button variant="outline" className={`mt-2 ${isDarkMode ? 'text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white' : 'text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white'}`}>
                        <Eye className="mr-2 h-4 w-4" /> Review
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="share">
            <Card className={isDarkMode ? 'bg-gray-800/50 backdrop-blur-sm border-gray-700' : 'bg-white/50 backdrop-blur-sm border-gray-200'}>
              <CardHeader>
                <CardTitle className={isDarkMode ? 'text-white' : 'text-gray-800'}>Share Uploaded Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Unlock className="mr-2 h-4 w-4 text-green-400" />
                      <span className={isDarkMode ? 'text-white' : 'text-gray-800'}>Grant Access</span>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Lock className="mr-2 h-4 w-4 text-red-400" />
                      <span className={isDarkMode ? 'text-white' : 'text-gray-800'}>Revoke Access</span>
                    </div>
                    <Switch />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Enter wallet address" 
                    className={`w-full p-2 rounded-md border ${isDarkMode ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500'}`}
                    defaultValue="0x0ea3a75846f79ab9ebefd41d72aa6dd31a54d3ee"
                  />
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                    <Share2 className="mr-2 h-4 w-4" /> Share Documents
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className={`text-center p-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-8`}>
        Copyright © 2023 Evault. All rights reserved.
      </footer>
    </div>
  )
}