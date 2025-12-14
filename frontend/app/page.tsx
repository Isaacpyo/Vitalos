import React from 'react';
import { HeartPulse, ShieldCheck, FileText, User } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-teal-50/30 text-slate-800 font-sans">
      <nav className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-semibold text-teal-700 flex items-center gap-2">
          <HeartPulse /> Vitalos <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-md ml-2">HIPAA Compliant</span>
        </div>
        <div className="flex gap-4 text-sm font-medium text-slate-600">
          <span>Patients</span>
          <span>Providers</span>
          <span>Insurance</span>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Mental health care, <br/> intelligently delivered.</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12">
          An end-to-end platform connecting patients with clinicians, automating intake with NLP, and ensuring secure data handling.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <ShieldCheck className="text-teal-600 mb-4" size={32} />
            <h3 className="text-lg font-bold mb-2">Secure & Encrypted</h3>
            <p className="text-slate-500 text-sm">End-to-end encryption for all patient records and video sessions.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <FileText className="text-teal-600 mb-4" size={32} />
            <h3 className="text-lg font-bold mb-2">AI Intake Screening</h3>
            <p className="text-slate-500 text-sm">NLP algorithms assist in initial risk assessment and triage.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <User className="text-teal-600 mb-4" size={32} />
            <h3 className="text-lg font-bold mb-2">Patient Portal</h3>
            <p className="text-slate-500 text-sm">Seamless appointment booking, medication tracking, and journaling.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
