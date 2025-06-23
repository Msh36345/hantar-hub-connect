

import { ExternalLink, FileText, MapPin, Calendar, Users, Video, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const Index = () => {
  const [showZoomLinks, setShowZoomLinks] = useState(false);

  const mainLinks = [
    {
      title: "נוכחות",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSfGbufvzOVfQ2nCIQAka7NfBHHVict4BPBaTtHXihmuAaITHw/viewform?usp=dialog",
      icon: Users,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "עדכון שבת",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSch3WAYFwBZxKKiVhlUgDFDnGvfngHrtqWO7U0WKj007j_77w/viewform?usp=dialog",
      icon: Calendar,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "נכסל - עידכון מיקום",
      url: "https://docs.google.com/forms/d/e/1FAIpQLScoBAu7e3l5MFnH-VaZAze7neiCVnQkXA3gIomjRdKJ9uJQnA/viewform",
      icon: MapPin,
      color: "from-green-500 to-green-600"
    }
  ];

  const zoomLinks = [
    {
      title: "כיתת גליל",
      url: "https://zoom.us/j/95819552982?pwd=BuL7cpUZyo3NT1B8eOR7704vTiiF5F.1"
    },
    {
      title: "מפקדה",
      url: "https://zoom.us/j/91384377380?pwd=7RLFJK2Kl1dMO0J6IwK2u6A1c7ciCk.1"
    }
  ];

  const handleLinkClick = (url: string) => {
    window.open(url, '_self');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white mb-2 text-center">עדכוני חנתר</h1>
                <p className="text-slate-300 text-center">מערכת דיווחים ועדכונים</p>
              </div>
            </div>
            
            {/* כניסת חנתר Link */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleLinkClick('https://docs.google.com/spreadsheets/d/1nPXscDwRWJBOI9ivAdCCpr6jN7qVyFO5Tx0JNe7W8wc/edit?resourcekey=&gid=542382109#gid=542382109')}
              className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700 transition-all duration-300 hover:scale-105"
            >
              <FileText className="w-4 h-4 mr-2" />
              כניסת חנתר
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {mainLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <Card 
                key={index} 
                className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 backdrop-blur-sm cursor-pointer"
                onClick={() => handleLinkClick(link.url)}
              >
                <CardHeader className="pb-4 text-center">
                  <div className={`w-12 h-12 bg-gradient-to-r ${link.color} rounded-lg flex items-center justify-center mb-3 mx-auto`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl text-center">{link.title}</CardTitle>
                </CardHeader>
              </Card>
            );
          })}

          {/* Zoom Links Card */}
          <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/10 backdrop-blur-sm">
            <CardHeader 
              className="pb-4 text-center cursor-pointer"
              onClick={() => setShowZoomLinks(!showZoomLinks)}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-3 mx-auto">
                <Video className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white text-xl text-center flex items-center justify-center gap-2">
                קישורי זום
                <ChevronDown className={`w-4 h-4 transition-transform ${showZoomLinks ? 'rotate-180' : ''}`} />
              </CardTitle>
            </CardHeader>
            {showZoomLinks && (
              <CardContent className="pt-0">
                <div className="space-y-2">
                  {zoomLinks.map((zoomLink, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full bg-slate-700 border-slate-600 text-white hover:bg-slate-600 transition-all duration-300"
                      onClick={() => handleLinkClick(zoomLink.url)}
                    >
                      <Video className="w-4 h-4 mr-2" />
                      {zoomLink.title}
                    </Button>
                  ))}
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 py-8 border-t border-slate-700">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">מערכת עדכונים מתקדמת לחנתר</p>
        </div>
      </div>
    </div>
  );
};

export default Index;

