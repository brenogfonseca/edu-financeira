import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Download,
  FileText,
  Calendar,
  User,
  Search,
  BookOpen,
  TrendingUp,
  Calculator,
  BarChart3,
} from "lucide-react";

const DownloadsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const papers = [
    {
      id: 1,
      title: "Educação Financeira Para Pessoas Idosas",
      authors: "Andrea Velasco Rufato, Avelina Alves Lima Neta",
      date: "",
      category: "Cartilha",
      description: "Guia Para Aposentados e Pensionistas do INSS.",
      size: "5.1 MB",
      downloads: 1247,
      tags: ["Cartilha", "Pensionistas", "INSS"],
    },
    {
      id: 2,
      title: "Educação Financeira Para os Segurados",
      authors: "Prof. Michael Rodriguez, Dr. Emily Watson",
      date: "2023-12-08",
      category: "Statistics",
      description: "IPOJUCAPREV",
      size: "3.1 MB",
      downloads: 892,
      tags: ["Statistics", "Data Analysis", "Modeling"],
    },
    {
      id: 3,
      title: "Numerical Methods for High-Precision Mathematical Computations",
      authors: "Dr. Emily Watson, Dr. James Kim",
      date: "2023-11-22",
      category: "Numerical Analysis",
      description:
        "Innovative numerical methods ensuring high precision in complex mathematical calculations.",
      size: "1.8 MB",
      downloads: 654,
      tags: ["Numerical Methods", "Precision Computing", "Analysis"],
    },
    {
      id: 4,
      title: "Machine Learning Applications in Mathematical Problem Solving",
      authors: "Dr. James Kim, Dr. Sarah Chen",
      date: "2023-10-30",
      category: "Machine Learning",
      description:
        "Exploring the intersection of machine learning and traditional mathematical problem-solving approaches.",
      size: "2.7 MB",
      downloads: 1156,
      tags: ["Machine Learning", "Problem Solving", "AI"],
    },
    {
      id: 5,
      title: "Graph Theory and Network Analysis in Modern Mathematics",
      authors: "Prof. Michael Rodriguez, Dr. Emily Watson",
      date: "2023-09-15",
      category: "Graph Theory",
      description:
        "Contemporary applications of graph theory in network analysis and mathematical modeling.",
      size: "2.2 MB",
      downloads: 743,
      tags: ["Graph Theory", "Networks", "Analysis"],
    },
    {
      id: 6,
      title: "Cryptographic Mathematics: Modern Security Applications",
      authors: "Dr. Sarah Chen, Dr. James Kim",
      date: "2023-08-20",
      category: "Cryptography",
      description:
        "Mathematical foundations of modern cryptography and security protocols.",
      size: "3.5 MB",
      downloads: 1025,
      tags: ["Cryptography", "Security", "Applied Math"],
    },
  ];

  const datasets = [
    {
      id: 1,
      title: "Mathematical Functions Performance Benchmark Dataset",
      description:
        "Comprehensive dataset containing performance metrics for various mathematical functions and algorithms.",
      size: "15.7 MB",
      format: "CSV, JSON",
      downloads: 423,
      date: "2024-01-10",
    },
    {
      id: 2,
      title: "Statistical Analysis Sample Data Collection",
      description:
        "Curated collection of sample datasets for statistical analysis and modeling research.",
      size: "8.3 MB",
      format: "CSV, XLSX",
      downloads: 567,
      date: "2023-12-15",
    },
    {
      id: 3,
      title: "Numerical Computation Accuracy Results",
      description:
        "Results from precision testing of various numerical computation methods and algorithms.",
      size: "4.2 MB",
      format: "JSON, XML",
      downloads: 234,
      date: "2023-11-08",
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Algorithms":
        return Calculator;
      case "Statistics":
        return BarChart3;
      case "Numerical Analysis":
        return TrendingUp;
      case "Machine Learning":
        return BookOpen;
      default:
        return FileText;
    }
  };

  const filteredPapers = papers.filter(
    (paper) =>
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Baixe ebooks e
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              {" "}
              Materiais de Apoio
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Acesse nossa biblioteca digital com vários materiais de apoio para
            suas workshops de educação financeira
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-8 max-w-2xl mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Pesquise titulos, atuores ou palavras-chave"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Tabs */}
        <Tabs defaultValue="papers" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="papers">Research Papers</TabsTrigger>
            <TabsTrigger value="datasets">Datasets</TabsTrigger>
          </TabsList>

          {/* Research Papers Tab */}
          <TabsContent value="papers">
            <div className="grid gap-6">
              {filteredPapers.map((paper) => {
                const IconComponent = getCategoryIcon(paper.category);
                return (
                  <Card
                    key={paper.id}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                            <IconComponent className="h-6 w-6 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl mb-2 leading-tight">
                              {paper.title}
                            </CardTitle>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                              <div className="flex items-center">
                                <User className="h-4 w-4 mr-1" />
                                {paper.authors}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {new Date(paper.date).toLocaleDateString()}
                              </div>
                              <div className="flex items-center">
                                <Download className="h-4 w-4 mr-1" />
                                {paper.downloads} downloads
                              </div>
                            </div>
                            <CardDescription className="mb-4">
                              {paper.description}
                            </CardDescription>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {paper.tags.map((tag, index) => (
                                <Badge
                                  key={index}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          PDF • {paper.size}
                        </div>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          <Download className="h-4 w-4 mr-2" />
                          Download PDF
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Datasets Tab */}
          <TabsContent value="datasets">
            <div className="grid gap-6">
              {datasets.map((dataset) => (
                <Card
                  key={dataset.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="p-2 bg-teal-100 dark:bg-teal-900/20 rounded-lg">
                          <BarChart3 className="h-6 w-6 text-teal-600" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">
                            {dataset.title}
                          </CardTitle>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {new Date(dataset.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center">
                              <Download className="h-4 w-4 mr-1" />
                              {dataset.downloads} downloads
                            </div>
                          </div>
                          <CardDescription className="mb-4">
                            {dataset.description}
                          </CardDescription>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>Format: {dataset.format}</span>
                            <span>Size: {dataset.size}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex justify-end">
                      <Button className="bg-teal-600 hover:bg-teal-700">
                        <Download className="h-4 w-4 mr-2" />
                        Download Dataset
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Usage Guidelines */}
        <Card className="mt-12 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-950/20 dark:to-teal-950/20 border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Usage Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-2">Academic Use</h3>
                <p className="text-sm text-muted-foreground">
                  All materials are freely available for academic research and
                  educational purposes.
                </p>
              </div>
              <div className="text-center">
                <FileText className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-2">Attribution</h3>
                <p className="text-sm text-muted-foreground">
                  Please cite our work when using these resources in your
                  research or publications.
                </p>
              </div>
              <div className="text-center">
                <User className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <h3 className="font-semibold mb-2">Contact Us</h3>
                <p className="text-sm text-muted-foreground">
                  Have questions? Reach out to our team for support and
                  collaboration opportunities.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DownloadsPage;
