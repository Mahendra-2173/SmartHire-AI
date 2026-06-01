import React from "react";
import Header from "../components/Header";
import ReportForm from "../components/reportForm";
import { useReport } from "../hooks/useReport";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();
  const { handleGenerateReport, loading } = useReport();

  const handleSubmit = async (formData) => {
    const report = await handleGenerateReport(formData);
    if (report) {
      navigate(`/report/${report._id}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] relative overflow-x-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-violet-700/25 rounded-full blur-[100px] sm:blur-[120px] animate-pulse" />

        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-indigo-600/20 rounded-full blur-[100px] sm:blur-[120px] animate-pulse delay-1000" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] sm:w-[300px] h-[180px] sm:h-[300px] bg-purple-500/10 rounded-full blur-[60px] sm:blur-[80px]" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05] sm:opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10">
        <Header />

        <div className="flex items-center justify-center px-3 sm:px-4 py-6 sm:py-12">
          <div className="w-full max-w-5xl">
            <ReportForm onSubmit={handleSubmit} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;