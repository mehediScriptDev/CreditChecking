import { useState, useCallback } from "react";
import {
  Upload,
  FileText,
  Check,
  X,
  AlertCircle,
  CheckCircle,
  ChevronRight,
  Eye,
  Trash2,
  HelpCircle,
  ArrowRight,
  RefreshCw,
  PencilLine,
  Table2,
} from "lucide-react";
import Card, {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../Components/ui/Card";
import Button from "../../Components/ui/Button";
import ProgressBar from "../../Components/ui/ProgressBar";
import StatusBadge from "../../Components/ui/StatusBadge";
import { toast } from "react-toastify";

// Bureau logos and colors
const BUREAUS = {
  equifax: {
    name: "Equifax",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    textColor: "text-red-600",
    icon: "📊",
  },
  transunion: {
    name: "TransUnion",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-600",
    icon: "📈",
  },
  experian: {
    name: "Experian",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    textColor: "text-indigo-600",
    icon: "📉",
  },
};

const CreditReportValidation = () => {
  const [activeTab, setActiveTab] = useState("upload"); // 'upload' | 'manual' | 'comparison'
  const [uploadedFiles, setUploadedFiles] = useState({
    equifax: null,
    transunion: null,
    experian: null,
  });
  const [processing, setProcessing] = useState(false);
  const [parsedData, setParsedData] = useState(null);
  const [showComparison, setShowComparison] = useState(false);
  const [dragOver, setDragOver] = useState(null);

  // Manual entry state
  const [manualData, setManualData] = useState({
    equifax: { accounts: [] },
    transunion: { accounts: [] },
    experian: { accounts: [] },
  });

  // File upload handler
  const handleFileUpload = useCallback((bureau, file) => {
    if (file && file.type === "application/pdf") {
      setUploadedFiles((prev) => ({
        ...prev,
        [bureau]: {
          file,
          name: file.name,
          size: (file.size / 1024 / 1024).toFixed(2) + " MB",
          status: "uploaded",
        },
      }));
      toast.success(`${BUREAUS[bureau].name} report uploaded successfully!`);
    } else {
      toast.error("Please upload a PDF file");
    }
  }, []);

  // Drag and drop handlers
  const handleDragOver = (e, bureau) => {
    e.preventDefault();
    setDragOver(bureau);
  };

  const handleDragLeave = () => {
    setDragOver(null);
  };

  const handleDrop = (e, bureau) => {
    e.preventDefault();
    setDragOver(null);
    const file = e.dataTransfer.files[0];
    handleFileUpload(bureau, file);
  };

  // Remove uploaded file
  const removeFile = (bureau) => {
    setUploadedFiles((prev) => ({
      ...prev,
      [bureau]: null,
    }));
    toast.info(`${BUREAUS[bureau].name} report removed`);
  };

  // Process uploaded files
  const processReports = async () => {
    const uploadedCount = Object.values(uploadedFiles).filter(Boolean).length;
    if (uploadedCount === 0) {
      toast.warning("Please upload at least one credit report");
      return;
    }

    setProcessing(true);

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Mock parsed data - in real app, this would come from backend
    const mockParsedData = generateMockComparisonData();
    setParsedData(mockParsedData);
    setProcessing(false);
    setShowComparison(true);
    setActiveTab("comparison");
    toast.success(
      "Reports processed successfully! View your comparison below.",
    );
  };

  // Generate mock comparison data for demonstration
  const generateMockComparisonData = () => ({
    personalInfo: {
      name: {
        equifax: "John Smith",
        transunion: "John Smith",
        experian: "John Smith",
        status: "match",
      },
      ssn: {
        equifax: "***-**-1234",
        transunion: "***-**-1234",
        experian: "***-**-1234",
        status: "match",
      },
      address: {
        equifax: "123 Main St",
        transunion: "123 Main St",
        experian: "123 Main Street",
        status: "minor",
      },
      dob: {
        equifax: "01/15/1985",
        transunion: "01/15/1985",
        experian: "01/15/1985",
        status: "match",
      },
    },
    tradelines: [
      {
        id: 1,
        creditor: "Chase Bank",
        accountType: "Credit Card",
        equifax: {
          balance: "$2,500",
          limit: "$10,000",
          status: "Open",
          payment: "Current",
        },
        transunion: {
          balance: "$2,500",
          limit: "$10,000",
          status: "Open",
          payment: "Current",
        },
        experian: {
          balance: "$2,500",
          limit: "$10,000",
          status: "Open",
          payment: "Current",
        },
        validationStatus: "match",
      },
      {
        id: 2,
        creditor: "Bank of America",
        accountType: "Auto Loan",
        equifax: {
          balance: "$15,000",
          limit: "$25,000",
          status: "Open",
          payment: "Current",
        },
        transunion: {
          balance: "$15,200",
          limit: "$25,000",
          status: "Open",
          payment: "Current",
        },
        experian: {
          balance: "$15,000",
          limit: "$25,000",
          status: "Open",
          payment: "Current",
        },
        validationStatus: "minor",
      },
      {
        id: 3,
        creditor: "Capital One",
        accountType: "Credit Card",
        equifax: {
          balance: "$500",
          limit: "$5,000",
          status: "Open",
          payment: "Current",
        },
        transunion: {
          balance: "$500",
          limit: "$5,000",
          status: "Closed",
          payment: "30 Days Late",
        },
        experian: {
          balance: "$500",
          limit: "$5,000",
          status: "Open",
          payment: "Current",
        },
        validationStatus: "mismatch",
      },
    ],
    summary: {
      totalAccounts: 3,
      matches: 1,
      minorDifferences: 1,
      mismatches: 1,
    },
  });

  // Get status color and icon
  const getStatusIndicator = (status) => {
    switch (status) {
      case "match":
        return {
          color: "bg-green-100 text-green-700 border-green-200",
          icon: <CheckCircle size={16} className="text-green-600" />,
          label: "Match",
          bgGradient: "from-green-500 to-green-600",
        };
      case "minor":
        return {
          color: "bg-yellow-100 text-yellow-700 border-yellow-200",
          icon: <AlertCircle size={16} className="text-yellow-600" />,
          label: "Minor Difference",
          bgGradient: "from-yellow-500 to-yellow-600",
        };
      case "mismatch":
        return {
          color: "bg-red-100 text-red-700 border-red-200",
          icon: <X size={16} className="text-red-600" />,
          label: "Mismatch",
          bgGradient: "from-red-500 to-red-600",
        };
      default:
        return {
          color: "bg-gray-100 text-gray-700 border-gray-200",
          icon: <HelpCircle size={16} className="text-gray-600" />,
          label: "Unknown",
          bgGradient: "from-gray-500 to-gray-600",
        };
    }
  };

  // Upload count
  const uploadedCount = Object.values(uploadedFiles).filter(Boolean).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-linear-to-r from-primary-600 via-primary-500 to-secondary-600 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <FileText size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-heading font-bold">
                Credit Report Validation
              </h1>
              <p className="text-primary-100 text-lg">
                Upload your reports from annualcreditreport.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <Card className="border-2 border-primary-100">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Upload Progress</h3>
            <span className="text-sm text-gray-600">
              {uploadedCount} of 3 reports uploaded
            </span>
          </div>
          <ProgressBar
            progress={(uploadedCount / 3) * 100}
            variant="primary"
            size="lg"
            showPercentage
            animated
          />
          <div className="flex justify-between mt-4">
            {Object.entries(BUREAUS).map(([key, bureau]) => (
              <div key={key} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    uploadedFiles[key]
                      ? "bg-linear-to-br " + bureau.color + " text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {uploadedFiles[key] ? <Check size={16} /> : bureau.icon}
                </div>
                <span
                  className={`text-sm font-medium ${uploadedFiles[key] ? bureau.textColor : "text-gray-500"}`}
                >
                  {bureau.name}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tab Navigation */}
      <div className="flex gap-2 bg-gray-100 p-1 rounded-xl">
        <button
          onClick={() => setActiveTab("upload")}
          className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
            activeTab === "upload"
              ? "bg-white text-primary-600 shadow-md"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <Upload size={18} />
          <span>Upload PDFs</span>
        </button>
        <button
          onClick={() => setActiveTab("manual")}
          className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
            activeTab === "manual"
              ? "bg-white text-primary-600 shadow-md"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <PencilLine size={18} />
          <span>Manual Entry</span>
        </button>
        {showComparison && (
          <button
            onClick={() => setActiveTab("comparison")}
            className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === "comparison"
                ? "bg-white text-primary-600 shadow-md"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Table2 size={18} />
            <span>Side-by-Side Comparison</span>
          </button>
        )}
      </div>

      {/* Upload Tab */}
      {activeTab === "upload" && (
        <div className="space-y-6">
          {/* Instructions */}
          <Card variant="info" className="border-2 border-info-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-info-100 rounded-lg flex items-center justify-center shrink-0">
                  <HelpCircle className="text-info-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-info-900 mb-2">
                    How to Get Your Free Credit Reports
                  </h4>
                  <ol className="text-sm text-info-800 space-y-1 list-decimal list-inside">
                    <li>
                      Visit{" "}
                      <span className="font-semibold">
                        annualcreditreport.com
                      </span>{" "}
                      (100% free, federally authorized)
                    </li>
                    <li>
                      Request reports from all 3 bureaus: Equifax, TransUnion,
                      and Experian
                    </li>
                    <li>Download each report as a PDF file</li>
                    <li>Upload each PDF below to start your validation</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upload Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(BUREAUS).map(([key, bureau]) => (
              <Card
                key={key}
                className={`relative overflow-hidden transition-all duration-300 ${
                  dragOver === key ? "ring-2 ring-primary-400 scale-[1.02]" : ""
                } ${uploadedFiles[key] ? bureau.borderColor + " border-2" : ""}`}
                hoverable
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${bureau.color}`}
                />
                <CardHeader className="text-center pb-2">
                  <div
                    className={`w-16 h-16 mx-auto rounded-2xl bg-linear-to-br ${bureau.color} flex items-center justify-center text-white text-2xl mb-3 shadow-lg`}
                  >
                    {bureau.icon}
                  </div>
                  <CardTitle>{bureau.name}</CardTitle>
                  <CardDescription>
                    Upload your {bureau.name} credit report PDF
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {!uploadedFiles[key] ? (
                    <label
                      className={`flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-xl cursor-pointer transition-all ${
                        dragOver === key
                          ? "border-primary-400 bg-primary-50"
                          : "border-gray-300 hover:border-primary-300 hover:bg-gray-50"
                      }`}
                      onDragOver={(e) => handleDragOver(e, key)}
                      onDragLeave={handleDragLeave}
                      onDrop={(e) => handleDrop(e, key)}
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <div
                          className={`w-12 h-12 rounded-full ${bureau.bgColor} flex items-center justify-center mb-3`}
                        >
                          <Upload className={bureau.textColor} size={24} />
                        </div>
                        <p className="text-sm text-gray-600 mb-1">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">
                          PDF files only (Max 10MB)
                        </p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        accept=".pdf"
                        onChange={(e) =>
                          handleFileUpload(key, e.target.files[0])
                        }
                      />
                    </label>
                  ) : (
                    <div
                      className={`p-4 rounded-xl ${bureau.bgColor} ${bureau.borderColor} border`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg bg-linear-to-br ${bureau.color} flex items-center justify-center text-white shrink-0`}
                        >
                          <FileText size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 truncate">
                            {uploadedFiles[key].name}
                          </p>
                          <p className="text-sm text-gray-600">
                            {uploadedFiles[key].size}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => removeFile(key)}
                            className="p-2 rounded-lg hover:bg-red-100 text-red-600 transition-colors"
                            title="Remove file"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center gap-2 text-green-600">
                        <CheckCircle size={16} />
                        <span className="text-sm font-medium">
                          Ready for processing
                        </span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Button */}
          <div className="flex justify-center">
            <Button
              size="xl"
              variant="primary"
              onClick={processReports}
              isLoading={processing}
              disabled={uploadedCount === 0 || processing}
              rightIcon={
                processing ? (
                  <RefreshCw size={20} className="animate-spin" />
                ) : (
                  <ArrowRight size={20} />
                )
              }
              className="shadow-xl hover:shadow-2xl transition-shadow"
            >
              {processing
                ? "Processing Reports..."
                : `Process ${uploadedCount} Report${uploadedCount !== 1 ? "s" : ""}`}
            </Button>
          </div>
        </div>
      )}

      {/* Manual Entry Tab */}
      {activeTab === "manual" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <PencilLine className="text-primary-600" size={24} />
                Manual Data Entry
              </CardTitle>
              <CardDescription>
                Enter your credit report information manually if you prefer not
                to upload PDFs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-gray-500">
                <PencilLine size={64} className="mx-auto mb-4 text-gray-300" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Manual Entry Coming Soon
                </h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  This feature will allow you to manually enter your credit
                  report data side-by-side for all three bureaus.
                </p>
                <Button variant="outline" className="mt-6">
                  Get Notified When Available
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Comparison Tab */}
      {activeTab === "comparison" && parsedData && (
        <div className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="border-2 border-gray-200">
              <CardContent className="p-5 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-3">
                  <FileText size={24} className="text-gray-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900">
                  {parsedData.summary.totalAccounts}
                </p>
                <p className="text-sm text-gray-600">Total Accounts</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-green-200">
              <CardContent className="p-5 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-3">
                  <CheckCircle size={24} className="text-green-600" />
                </div>
                <p className="text-3xl font-bold text-green-600">
                  {parsedData.summary.matches}
                </p>
                <p className="text-sm text-gray-600">Perfect Matches</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-yellow-200">
              <CardContent className="p-5 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-yellow-100 flex items-center justify-center mb-3">
                  <AlertCircle size={24} className="text-yellow-600" />
                </div>
                <p className="text-3xl font-bold text-yellow-600">
                  {parsedData.summary.minorDifferences}
                </p>
                <p className="text-sm text-gray-600">Minor Differences</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-red-200">
              <CardContent className="p-5 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-red-100 flex items-center justify-center mb-3">
                  <X size={24} className="text-red-600" />
                </div>
                <p className="text-3xl font-bold text-red-600">
                  {parsedData.summary.mismatches}
                </p>
                <p className="text-sm text-gray-600">Mismatches</p>
              </CardContent>
            </Card>
          </div>

          {/* Traffic Light Legend */}
          <Card className="border-2 border-gray-100">
            <CardContent className="p-4">
              <div className="flex flex-wrap items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-green-500" />
                  <span className="text-sm font-medium text-gray-700">
                    Match - Data is consistent
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-yellow-500" />
                  <span className="text-sm font-medium text-gray-700">
                    Minor Difference - Small variations
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-red-500" />
                  <span className="text-sm font-medium text-gray-700">
                    Mismatch - Needs attention
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Side-by-Side Comparison Table */}
          <Card elevation="lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Table2 className="text-primary-600" size={24} />
                Side-by-Side Bureau Comparison
              </CardTitle>
              <CardDescription>
                Compare your credit data across all three bureaus
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left py-4 px-6 font-semibold text-gray-700">
                        Account
                      </th>
                      <th className="text-center py-4 px-6 font-semibold text-red-600 min-w-45">
                        <div className="flex items-center justify-center gap-2">
                          {BUREAUS.equifax.icon} Equifax
                        </div>
                      </th>
                      <th className="text-center py-4 px-6 font-semibold text-blue-600 min-w-45">
                        <div className="flex items-center justify-center gap-2">
                          {BUREAUS.transunion.icon} TransUnion
                        </div>
                      </th>
                      <th className="text-center py-4 px-6 font-semibold text-indigo-600 min-w-45">
                        <div className="flex items-center justify-center gap-2">
                          {BUREAUS.experian.icon} Experian
                        </div>
                      </th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-700">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {parsedData.tradelines.map((tradeline, idx) => {
                      const statusInfo = getStatusIndicator(
                        tradeline.validationStatus,
                      );
                      return (
                        <tr
                          key={tradeline.id}
                          className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                            idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                          }`}
                        >
                          <td className="py-4 px-6">
                            <div>
                              <p className="font-semibold text-gray-900">
                                {tradeline.creditor}
                              </p>
                              <p className="text-sm text-gray-600">
                                {tradeline.accountType}
                              </p>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-center">
                            <div className="space-y-1 text-sm">
                              <p>
                                <span className="text-gray-500">Balance:</span>{" "}
                                {tradeline.equifax.balance}
                              </p>
                              <p>
                                <span className="text-gray-500">Limit:</span>{" "}
                                {tradeline.equifax.limit}
                              </p>
                              <p>
                                <span className="text-gray-500">Status:</span>{" "}
                                {tradeline.equifax.status}
                              </p>
                              <p>
                                <span className="text-gray-500">Payment:</span>{" "}
                                {tradeline.equifax.payment}
                              </p>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-center">
                            <div className="space-y-1 text-sm">
                              <p>
                                <span className="text-gray-500">Balance:</span>{" "}
                                {tradeline.transunion.balance}
                              </p>
                              <p>
                                <span className="text-gray-500">Limit:</span>{" "}
                                {tradeline.transunion.limit}
                              </p>
                              <p>
                                <span className="text-gray-500">Status:</span>{" "}
                                {tradeline.transunion.status}
                              </p>
                              <p>
                                <span className="text-gray-500">Payment:</span>{" "}
                                {tradeline.transunion.payment}
                              </p>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-center">
                            <div className="space-y-1 text-sm">
                              <p>
                                <span className="text-gray-500">Balance:</span>{" "}
                                {tradeline.experian.balance}
                              </p>
                              <p>
                                <span className="text-gray-500">Limit:</span>{" "}
                                {tradeline.experian.limit}
                              </p>
                              <p>
                                <span className="text-gray-500">Status:</span>{" "}
                                {tradeline.experian.status}
                              </p>
                              <p>
                                <span className="text-gray-500">Payment:</span>{" "}
                                {tradeline.experian.payment}
                              </p>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-center">
                            <div
                              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${statusInfo.color}`}
                            >
                              {statusInfo.icon}
                              <span className="text-sm font-medium">
                                {statusInfo.label}
                              </span>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Advisory Messages */}
          <Card variant="warning">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertCircle
                  className="text-warning-600 shrink-0"
                  size={24}
                />
                <div>
                  <h4 className="font-semibold text-warning-900 mb-2">
                    Action Required
                  </h4>
                  <p className="text-sm text-warning-800 mb-4">
                    We found {parsedData.summary.mismatches} mismatch(es) in
                    your credit reports that may be impacting your credit score.
                    Review the red-flagged items above and proceed to the Credit
                    Score Validation to understand the full impact.
                  </p>
                  <Button
                    variant="primary"
                    rightIcon={<ArrowRight size={18} />}
                  >
                    Continue to Score Validation
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CreditReportValidation;
