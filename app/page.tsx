"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, BarChart3, Check, CircleGauge, Laptop, Menu, ShieldCheck, Sparkles, Wrench } from "lucide-react";

const features = [
  { icon: Laptop, title: "One asset register", text: "Track every laptop, monitor and accessory from purchase to retirement." },
  { icon: CircleGauge, title: "Operational clarity", text: "See assignment, condition and lifecycle status without chasing spreadsheets." },
  { icon: ShieldCheck, title: "Audit-ready history", text: "Keep a clean trail of ownership changes, repairs and compliance checks." },
];
const metrics = [["1,284", "Assets tracked"], ["96.4%", "Inventory accuracy"], ["₦18.6m", "Assets managed"]];

function Logo() {
  return <span className="brand-lockup"><span className="brand-mark">TF</span><span>TrackForge</span></span>;
}

export default function Home() {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <main className="marketing-shell">
      <nav className="site-nav" aria-label="Main navigation">
        <Link href="/" aria-label="TrackForge home"><Logo /></Link>
        <div className="nav-links"><a href="#features">Platform</a><a href="#workflow">Workflow</a><a href="#about">About</a></div>
        <Link className="button button-small" href="/dashboard">Open dashboard <ArrowRight size={16} /></Link>
        <button className="nav-menu" aria-label="Open navigation" aria-expanded={mobileNav} onClick={() => setMobileNav(value => !value)}><Menu /></button>
        {mobileNav && <div className="mobile-nav-panel"><a href="#features" onClick={()=>setMobileNav(false)}>Platform</a><a href="#workflow" onClick={()=>setMobileNav(false)}>Workflow</a><a href="#about" onClick={()=>setMobileNav(false)}>About</a><Link href="/dashboard">Open dashboard</Link></div>}
      </nav>

      <section className="hero-section">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={15} /> IT operations, finally in order</div>
          <h1>Every asset.<br /><span>Accounted for.</span></h1>
          <p>TrackForge gives growing teams a reliable view of their hardware, assignments and maintenance—without another messy spreadsheet.</p>
          <div className="hero-actions"><Link className="button" href="/dashboard">Explore the dashboard <ArrowRight size={18} /></Link><a className="text-link" href="#features">See how it works</a></div>
          <div className="trust-row"><span><Check size={15} /> No credit card</span><span><Check size={15} /> Demo data included</span></div>
        </div>

        <div className="product-window" aria-label="TrackForge dashboard preview">
          <div className="window-top"><span /><span /><span /><small>trackforge / overview</small></div>
          <div className="window-body">
            <aside className="mini-sidebar"><div className="brand-mark">TF</div><i className="active" /><i /><i /><i /><i /></aside>
            <div className="mini-main">
              <div className="mini-title"><span>Operations overview</span><b>+ Add asset</b></div>
              <div className="mini-cards"><article><small>Total assets</small><strong>1,284</strong><em>+8.2%</em></article><article><small>Assigned</small><strong>1,036</strong><em>80.7%</em></article><article><small>Needs action</small><strong>17</strong><em className="warn">Review</em></article></div>
              <div className="mini-panels"><article className="mini-chart"><small>Asset health</small><div className="bars"><i /><i /><i /><i /><i /><i /><i /></div><div className="chart-line" /></article><article className="mini-ring"><small>Lifecycle</small><div className="ring"><b>84%</b></div></article></div>
              <div className="mini-table"><i /><i /><i /><i /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="metric-strip" aria-label="Product results">{metrics.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</section>

      <section className="features-section" id="features">
        <div className="section-heading"><span className="eyebrow">Built for real operations</span><h2>Less searching.<br />More certainty.</h2><p>A focused workspace for the people responsible for keeping every device visible, useful and secure.</p></div>
        <div className="feature-grid">{features.map(({ icon: Icon, title, text }, index) => <article className="feature-card" key={title}><div className="feature-number">0{index + 1}</div><Icon size={24} /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="workflow-section" id="workflow">
        <div className="workflow-visual"><div className="scan-circle"><Wrench /><span>Asset verified</span></div><div className="scan-tag tag-one">LTP-0248</div><div className="scan-tag tag-two">Assigned</div><div className="scan-tag tag-three">Healthy</div></div>
        <div className="workflow-copy"><span className="eyebrow">A cleaner workflow</span><h2>From handover to hardware health.</h2><ol><li><span>01</span><div><b>Register</b><p>Add purchase, warranty and device details in one place.</p></div></li><li><span>02</span><div><b>Assign</b><p>Record who has what, where it is and when it changed hands.</p></div></li><li><span>03</span><div><b>Maintain</b><p>Surface issues early and keep the full service history visible.</p></div></li></ol></div>
      </section>

      <section className="cta-section" id="about"><BarChart3 size={34} /><h2>See the operation clearly.</h2><p>Explore a realistic dashboard built for modern IT asset teams.</p><Link className="button button-light" href="/dashboard">Launch interactive demo <ArrowRight size={18} /></Link></section>
      <footer><Logo /><p>Designed and developed by Wisdom Dickson · 2026</p><Link href="/dashboard">Dashboard</Link></footer>
    </main>
  );
}
