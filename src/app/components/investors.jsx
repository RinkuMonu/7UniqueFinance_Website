"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiDownload, FiExternalLink } from 'react-icons/fi';
import Head from 'next/head';
import { FiUsers, FiShield, FiActivity, FiCheckCircle, FiFileText, FiClipboard, FiBook, FiMic } from 'react-icons/fi';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';
const Investors = () => {
    const [activeTab, setActiveTab] = useState('partner-institutions');

    const tabs = [
        { id: 'partner-institutions', label: 'Partner Institutions' },
        { id: 'corporate-governance', label: 'Corporate Governance' },
        { id: 'investor-services', label: 'Investor Services' },
        { id: 'stock-exchange', label: 'Stock Exchange' },
        { id: 'information-memorandum', label: 'Information Memorandum' },
        { id: 'policies-codes', label: 'Policies and Codes' },
        { id: 'social-impact', label: 'Social Impact' },
        { id: 'financial-highlights', label: 'Financial Highlights' }
    ];

    const tabContents = {
        'partner-institutions': {
            title: "Strategic Partner Institutions",
            content: (
                <>
                    <p className="text-lg text-gray-600 mb-8 max-w-3xl">
                        We collaborate with leading global financial institutions to drive sustainable growth and create long-term value for our investors.
                        Our strategic alliances span across banking, investment, and financial services sectors worldwide, combining expertise to deliver
                        exceptional financial solutions and innovative products to our clients.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                name: "Global Investment Bank",
                                logo: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
                                desc: "Our premier investment banking partner providing strategic advisory, capital raising, and M&A services across global markets",
                                since: "Partner since 2015"
                            },
                            {
                                name: "International Asset Manager",
                                logo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
                                desc: "Global asset management leader offering institutional-grade investment solutions and portfolio management services",
                                since: "Partner since 2017"
                            },
                            {
                                name: "Credit Rating Agency",
                                logo: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
                                desc: "World's leading credit rating agency providing AAA rated financial stability assessments and risk analysis",
                                since: "Partner since 2012"
                            },
                            {
                                name: "Technology Partner",
                                logo: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
                                desc: "Innovative fintech solutions provider enabling our digital transformation and blockchain initiatives",
                                since: "Partner since 2019"
                            }
                        ].map((partner, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                            >
                                <div className="h-40 bg-gray-50 rounded-xl mb-4 flex items-center justify-center p-4 overflow-hidden">
                                    <motion.img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="h-full w-full object-fill"
                                        whileHover={{ scale: 1.05 }}
                                    />
                                </div>
                                <h4 className="text-lg px-2 font-semibold text-[#142a47] mb-2">{partner.name}</h4>
                                <p className="text-gray-600 px-2 text-sm mb-3">{partner.desc}</p>
                                <p className="text-xs px-2 text-gray-400 mb-4">{partner.since}</p>
                                <motion.button
                                    whileHover={{ x: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="text-[#A47148] px-2 font-medium flex items-center group"
                                >
                                    View partnership <FiArrowRight className="ml-2  group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 bg-gradient-to-r from-[#142a47]/5 to-[#A47148]/5 p-4 sm:p-6 md:p-8 rounded-2xl border border-[#142a47]/10">
                        <h3 className="text-xl font-semibold text-[#142a47]  mb-6">Our Partnership Approach</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Co-investment opportunities",
                                    desc: "Joint investment initiatives with aligned interests and shared risk management frameworks"
                                },
                                {
                                    title: "Technology sharing agreements",
                                    desc: "Mutual exchange of proprietary technologies and digital infrastructure"
                                },
                                {
                                    title: "Joint venture formations",
                                    desc: "Special purpose vehicles for targeted market penetration and product development"
                                },
                                {
                                    title: "Market expansion support",
                                    desc: "Collaborative efforts to enter new geographical markets and customer segments"
                                },
                                {
                                    title: "Research collaborations",
                                    desc: "Shared research initiatives focusing on financial innovation and market trends"
                                },
                                {
                                    title: "Sustainability initiatives",
                                    desc: "ESG-focused partnerships driving responsible investing and green finance"
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                                    whileHover={{ y: -3 }}
                                >
                                    <div className="flex items-start mb-2">
                                        <div className="bg-[#A47148] p-1 rounded-full mt-1 mr-3 flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-[#142a47]">{item.title}</h4>
                                            <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-[#142a47]/10">
                            <h4 className="text-lg font-medium text-[#142a47] mb-4">Partnership Benefits</h4>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex items-start">
                                    <div className="bg-[#142a47] p-2 rounded-lg mr-4 text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-[#142a47]">Enhanced Market Reach</h5>
                                        <p className="text-gray-600 text-sm mt-1">Leveraging combined networks to access 30+ new markets and 2M+ potential customers</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-[#142a47] p-2 rounded-lg mr-4 text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-[#142a47]">Shared Resources</h5>
                                        <p className="text-gray-600 text-sm mt-1">Pooling $500M+ in combined assets and 150+ industry experts</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        },
        'corporate-governance': {
            title: "Corporate Governance Framework",
            content: (
                <>
                    <div className="relative mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center max-w-4xl mx-auto"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-[#142a47] mb-4">Corporate Governance Excellence</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                We maintain the highest standards of corporate governance to ensure transparency, accountability, and ethical business conduct across all levels of our organization.
                            </p>
                        </motion.div>

                        {/* Decorative elements */}
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#A47148]/10 rounded-full blur-xl opacity-70"></div>
                        <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-[#142a47]/10 rounded-full blur-xl opacity-50"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 relative">
                        {/* Animated background elements */}
                        <div className="absolute -z-10 w-full h-full opacity-10">
                            <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-[#A47148] rounded-full filter blur-3xl"></div>
                            <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-[#142a47] rounded-full filter blur-3xl"></div>
                        </div>

                        {/* Board Composition Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-16 h-16 bg-[#142a47]/5 rounded-bl-2xl"></div>
                            <div className="bg-[#142a47]/10 p-4 rounded-xl w-14 h-14 flex items-center justify-center mb-6">
                                <FiUsers className="h-7 w-7 text-[#A47148]" />
                            </div>
                            <h4 className="text-xl font-bold text-[#142a47] mb-5">Board Composition</h4>
                            <ul className="space-y-3">
                                {[
                                    "Independent directors (50% of board)",
                                    "Gender diversity (30% women directors)",
                                    "Specialized committees",
                                    "Annual performance evaluation"
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <FiCheckCircle className="text-[#A47148] mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#A47148] to-[#142a47]"></div>
                        </motion.div>

                        {/* Ethical Practices Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all relative overflow-hidden"
                        >
                            <div className="absolute -top-5 -right-5 w-20 h-20 bg-[#A47148]/5 rounded-full"></div>
                            <div className="bg-[#142a47]/10 p-4 rounded-xl w-14 h-14 flex items-center justify-center mb-6">
                                <FiShield className="h-7 w-7 text-[#A47148]" />
                            </div>
                            <h4 className="text-xl font-bold text-[#142a47] mb-5">Ethical Practices</h4>
                            <ul className="space-y-3">
                                {[
                                    "Code of conduct for all employees",
                                    "Anti-bribery & corruption policy",
                                    "Whistleblower protection",
                                    "Conflict of interest guidelines"
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 + 0.1 }}
                                    >
                                        <FiCheckCircle className="text-[#A47148] mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#142a47] to-[#A47148]"></div>
                        </motion.div>

                        {/* Risk Management Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all relative overflow-hidden"
                        >
                            <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#142a47]/5 rounded-tl-2xl"></div>
                            <div className="bg-[#142a47]/10 p-4 rounded-xl w-14 h-14 flex items-center justify-center mb-6">
                                <FiActivity className="h-7 w-7 text-[#A47148]" />
                            </div>
                            <h4 className="text-xl font-bold text-[#142a47] mb-5">Risk Management</h4>
                            <ul className="space-y-3">
                                {[
                                    "Comprehensive risk framework",
                                    "Quarterly risk assessments",
                                    "Cybersecurity protocols",
                                    "Business continuity planning"
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-start"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 + 0.2 }}
                                    >
                                        <FiCheckCircle className="text-[#A47148] mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#A47148] via-[#142a47] to-[#A47148]"></div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-[#6d7f96] via-[#2f4e79] to-[#506d96] rounded-2xl p-8 text-white relative overflow-hidden"
                    >
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#A47148]/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Governance Documents</h3>
                                    <p className="text-white/80">Access our comprehensive governance policies and frameworks</p>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="mt-4 md:mt-0 px-6 py-3 bg-white text-[#142a47] rounded-lg font-semibold flex items-center"
                                >
                                    <FiDownload className="mr-2" />
                                    Download All
                                </motion.button>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { name: "Board Charter", icon: <FiFileText /> },
                                    { name: "Committee Charters", icon: <FiClipboard /> },
                                    { name: "Code of Conduct", icon: <FiBook /> },
                                    { name: "Whistleblower Policy", icon: <FiMic /> }
                                ].map((doc, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ y: -5 }}
                                        className="bg-white/10 p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all cursor-pointer backdrop-blur-sm"
                                    >
                                        <div className="flex flex-col items-center text-center">
                                            <div className="bg-white/20 p-3 rounded-full mb-4 text-white">
                                                {doc.icon}
                                            </div>
                                            <span className="font-medium">{doc.name}</span>
                                            <span className="text-sm text-white/60 mt-1">PDF, {(Math.random() * 2 + 0.5).toFixed(1)}MB</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </>
            )
        },
        'investor-services': {
            title: "Comprehensive Investor Services",
            content: (
                <>
                    <p className="text-lg text-gray-600 mb-8 max-w-3xl">
                        Our dedicated investor relations team provides personalized support to shareholders, analysts, and potential investors
                        through a range of specialized services designed to enhance your investment experience.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {[
                            {
                                title: "Shareholder Services",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                ),
                                description: "We provide comprehensive support for all shareholder needs with streamlined processes and dedicated account management.",
                                services: [
                                    "Our dividend payment system ensures timely and accurate distribution of returns to all shareholders.",
                                    "Stock transfer services are handled with precision and security through our automated systems.",

                                ],
                                image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                            },
                            {
                                title: "Analyst Relations",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                ),
                                description: "Maintaining transparent communication with financial analysts and institutional investors through multiple channels.",
                                services: [
                                    "Quarterly earnings webcasts provide detailed financial performance updates.",
                                    "Non-deal roadshows facilitate direct engagement with investment communities.",

                                ],
                                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                            },
                            {
                                title: "Investor Education",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                ),
                                description: "Educational resources to help investors understand our business and make informed decisions.",
                                services: [
                                    "Comprehensive tutorials on investment strategies and market analysis.",
                                    "Frequently asked questions addressing common investor inquiriessss."
                                ],
                                image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl"
                            >
                                <div className="h-48 bg-gray-50 relative overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#142a47]/90 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <div className="bg-[#A47148] p-3 rounded-lg text-white inline-flex mb-2">
                                            {service.icon}
                                        </div>
                                        <h4 className="text-xl font-semibold text-white">{service.title}</h4>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-600 mb-4">{service.description}</p>
                                    <div className="space-y-4 mb-6">
                                        {service.services.map((item, i) => (
                                            <div key={i} className="flex items-start">
                                                <div className="flex-shrink-0 mt-1">
                                                    <div className="bg-[#A47148]/10 p-1 rounded-full">
                                                        <svg className="h-3 w-3 text-[#A47148]" fill="currentColor" viewBox="0 0 8 8">
                                                            <circle cx="4" cy="4" r="3" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="ml-3 text-gray-700">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        className="text-[#A47148] font-medium flex items-center group"
                                    >
                                        Explore services
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-r from-[#f9f9f9] to-[#f0f0f0] rounded-2xl p-8 shadow-inner">
                        <h3 className="text-2xl font-semibold text-[#142a47] mb-6">Connect With Our Investor Relations Team</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-lg font-medium text-[#142a47] mb-4 border-b border-[#A47148]/30 pb-2">General Inquiries</h4>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="bg-[#A47148]/10 p-3 rounded-xl mr-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#A47148]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-600 mb-1">Email</p>
                                            <a href="mailto:investors@skfin.in" className="text-[#142a47] hover:text-[#A47148] transition-colors text-lg">investors@skfin.in</a>
                                            <p className="text-gray-500 text-sm mt-1">Typically responds within 24 hours</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-[#A47148]/10 p-3 rounded-xl mr-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#A47148]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-600 mb-1">Phone</p>
                                            <a href="tel:+9118001039039" className="text-[#142a47] hover:text-[#A47148] transition-colors text-lg">+91 1800 103 9039</a>
                                            <p className="text-gray-500 text-sm mt-1">Monday-Friday, 9:00 AM - 6:00 PM IST</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-medium text-[#142a47] mb-4 border-b border-[#A47148]/30 pb-2">Media Relations</h4>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="bg-[#A47148]/10 p-3 rounded-xl mr-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#A47148]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-600 mb-1">Press Inquiries</p>
                                            <a href="mailto:press@skfin.in" className="text-[#142a47] hover:text-[#A47148] transition-colors text-lg">press@skfin.in</a>
                                            <p className="text-gray-500 text-sm mt-1">For media interviews and press releases</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-[#A47148]/10 p-3 rounded-xl mr-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#A47148]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-600 mb-1">Media Assets</p>
                                            <a href="#" className="text-[#142a47] hover:text-[#A47148] transition-colors flex items-center text-lg">
                                                Download Media Kit
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </a>
                                            <p className="text-gray-500 text-sm mt-1">Logos, executive photos, and company facts</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        },
        'stock-exchange': {
            title: "Stock Exchange Information",
            content: (
                <>
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#A47148] mb-4">SK Finance Limited Stock Performance</h2>
                        <p className="text-lg text-gray-600">
                            Real-time market data and historical performance for our securities traded on the
                            <span className="text-[#A47148] font-medium"> National Stock Exchange (NSE)</span> and
                            <span className="text-[#A47148] font-medium"> Bombay Stock Exchange (BSE)</span>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                        {/* Stock Price Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden"
                        >
                            <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#A47148]/10 rounded-full"></div>
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Current Price</p>
                                        <p className="text-4xl font-bold text-[#142a47] mt-2">₹1,245.50</p>
                                    </div>
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                                        </svg>
                                        +2.4%
                                    </span>
                                </div>

                                {/* Stock Chart Placeholder */}
                                <div className="h-48 bg-gradient-to-br from-[#f9f9f9] to-[#f0f0f0] rounded-xl flex items-center justify-center mb-6 relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-full px-6">
                                            <div className="flex items-end space-x-1 h-32">
                                                {[30, 60, 45, 80, 60, 90, 75].map((height, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ height: 0 }}
                                                        whileInView={{ height: `${height}%` }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.8, delay: i * 0.1 }}
                                                        className="bg-[#A47148] w-6 rounded-t-lg"
                                                    ></motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-400 z-10 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg">Live Chart Loading...</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-[#f9f9f9] p-3 rounded-lg">
                                        <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Day Range</p>
                                        <p className="font-semibold text-lg mt-1">₹1,220 - ₹1,258</p>
                                    </div>
                                    <div className="bg-[#f9f9f9] p-3 rounded-lg">
                                        <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Volume</p>
                                        <p className="font-semibold text-lg mt-1">245,820</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Trading Data Table */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-full"
                            >
                                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                                    <h4 className="text-xl font-semibold text-[#142a47]">Historical Trading Data</h4>
                                    <div className="flex space-x-2">
                                        <button className="px-3 py-1 text-sm bg-[#142a47] text-white rounded-lg">1M</button>
                                        <button className="px-3 py-1 text-sm bg-[#f0f0f0] text-[#142a47] rounded-lg">3M</button>
                                        <button className="px-3 py-1 text-sm bg-[#f0f0f0] text-[#142a47] rounded-lg">1Y</button>
                                    </div>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-[#f9f9f9]">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Open</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">High</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Low</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Close</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volume</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {[
                                                { date: "2023-06-15", open: 1240, high: 1258, low: 1235, close: 1255, volume: "245,820", change: "+1.21%" },
                                                { date: "2023-06-14", open: 1235, high: 1245, low: 1220, close: 1240, volume: "198,450", change: "+0.40%" },
                                                { date: "2023-06-13", open: 1225, high: 1240, low: 1215, close: 1235, volume: "175,320", change: "+0.81%" },
                                                { date: "2023-06-12", open: 1210, high: 1230, low: 1205, close: 1225, volume: "210,780", change: "+1.24%" },
                                                { date: "2023-06-09", open: 1205, high: 1215, low: 1195, close: 1210, volume: "165,430", change: "-0.41%" }
                                            ].map((row, i) => (
                                                <motion.tr
                                                    key={i}
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.3, delay: i * 0.05 }}
                                                    className="hover:bg-[#f9f9f9]"
                                                >
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.date}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{row.open}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{row.high}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{row.low}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#142a47]">₹{row.close}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <span className="text-sm text-gray-500 mr-2">{row.volume}</span>
                                                            <span className={`text-xs px-2 py-0.5 rounded-full ${row.change.startsWith('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                                                {row.change}
                                                            </span>
                                                        </div>
                                                    </td>
                                                </motion.tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* NSE Listing */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden"
                        >
                            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#A47148]/5 rounded-full"></div>
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-6">
                                    <h4 className="text-xl font-semibold text-[#142a47]">NSE Listing</h4>
                                    <div className="bg-[#142a47]/10 p-3 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#A47148]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="space-y-5">
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1">Symbol</p>
                                        <p className="font-bold text-2xl text-[#142a47]">SKFINANCE</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-[#f9f9f9] p-4 rounded-lg">
                                            <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1">ISIN</p>
                                            <p className="font-medium">INE123456789</p>
                                        </div>
                                        <div className="bg-[#f9f9f9] p-4 rounded-lg">
                                            <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1">Listing Date</p>
                                            <p className="font-medium">March 15, 2018</p>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-[#6384b1] to-[#2d5394] p-4 rounded-lg text-white">
                                        <p className="text-xs uppercase tracking-wider font-medium mb-1">Market Capitalization</p>
                                        <p className="font-bold text-2xl">₹12,345 Cr</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* BSE Listing */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden"
                        >
                            <div className="absolute -left-10 -top-10 w-40 h-40 bg-[#A47148]/5 rounded-full"></div>
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-6">
                                    <h4 className="text-xl font-semibold text-[#142a47]">BSE Listing</h4>
                                    <div className="bg-[#142a47]/10 p-3 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#A47148]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="space-y-5">
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1">Symbol</p>
                                        <p className="font-bold text-2xl text-[#142a47]">543210</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-[#f9f9f9] p-4 rounded-lg">
                                            <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1">ISIN</p>
                                            <p className="font-medium">INE123456789</p>
                                        </div>
                                        <div className="bg-[#f9f9f9] p-4 rounded-lg">
                                            <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1">Listing Date</p>
                                            <p className="font-medium">March 15, 2018</p>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-[#6384b1] to-[#2d5394] p-4 rounded-lg text-white">
                                        <p className="text-xs uppercase tracking-wider font-medium mb-1">Market Capitalization</p>
                                        <p className="font-bold text-2xl">₹12,345 Cr</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )
        },
        'information-memorandum': {
            title: "Information Memorandum & Reports",
            content: (
                <>
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#142a47] mb-4">Financial Documents & Reports</h2>
                        <p className="text-lg text-gray-600">
                            Explore our comprehensive collection of financial reports, investor presentations, and regulatory filings
                            that provide transparency into our business operations and financial performance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {[
                            {
                                title: "Annual Report 2023",
                                type: "PDF",
                                size: "8.4 MB",
                                date: "May 15, 2023",
                                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                                category: "Financial Report"
                            },
                            {
                                title: "Quarterly Results Q1",
                                type: "PDF",
                                size: "3.2 MB",
                                date: "July 28, 2023",
                                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                                category: "Earnings"
                            },
                            {
                                title: "Investor Presentation",
                                type: "PPT",
                                size: "12.1 MB",
                                date: "June 10, 2023",
                                image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                                category: "Presentation"
                            },
                            {
                                title: "Sustainability Report",
                                type: "PDF",
                                size: "5.7 MB",
                                date: "April 22, 2023",
                                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                                category: "ESG"
                            },
                            {
                                title: "Corporate Governance Report",
                                type: "PDF",
                                size: "2.9 MB",
                                date: "March 30, 2023",
                                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                                category: "Governance"
                            },
                            {
                                title: "Information Memorandum",
                                type: "PDF",
                                size: "15.3 MB",
                                date: "January 15, 2023",
                                image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                                category: "Legal Document"
                            }
                        ].map((doc, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                            >
                                <div className="h-48 relative overflow-hidden">
                                    <img
                                        src={doc.image}
                                        alt={doc.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#142a47]/90 to-transparent"></div>
                                    <div className="absolute top-4 right-4 bg-white/90 text-[#142a47] text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                                        {doc.type}
                                    </div>
                                    <div className="absolute bottom-0 left-0 p-6 w-full">
                                        <span className="bg-[#A47148] text-white text-xs font-medium px-3 py-1 rounded-full">
                                            {doc.category}
                                        </span>
                                        <h4 className="text-xl font-semibold text-white mt-2">{doc.title}</h4>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between text-sm text-gray-500 mb-4">
                                        <span className="flex items-center">
                                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                            </svg>
                                            {doc.size}
                                        </span>
                                        <span className="flex items-center">
                                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                            </svg>
                                            {doc.date}
                                        </span>
                                    </div>
                                    <div className="flex space-x-3">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex-1 bg-[#A47148] text-white font-medium py-2 px-4 rounded-lg text-sm flex items-center justify-center hover:bg-[#8a5f3a] transition-colors"
                                        >
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                            Download
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex-1 bg-white border border-[#A47148] text-[#A47148] font-medium py-2 px-4 rounded-lg text-sm flex items-center justify-center hover:bg-[#A47148]/10 transition-colors"
                                        >
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                            Preview
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-[#142a47]/5 to-[#A47148]/5 p-5 sm:p-8 rounded-2xl border border-gray-200"
                    >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                            <h3 className="text-2xl font-semibold text-[#142a47] mb-4 md:mb-0">Regulatory Filings & Disclosures</h3>
                            <div className="flex space-x-2">
                                <button className="px-4 py-2 text-sm bg-[#142a47] text-white rounded-lg">All Filings</button>
                                <button className="px-4 py-2 text-sm bg-white text-[#142a47] border border-gray-300 rounded-lg">SEBI</button>
                                <button className="px-4 py-2 text-sm bg-white text-[#142a47] border border-gray-300 rounded-lg">RBI</button>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-[#142a47]">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Date</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Document Title</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Type</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Size</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {[
                                        {
                                            date: "2023-07-15",
                                            title: "Form A - Annual Return",
                                            type: "PDF",
                                            size: "1.2 MB",
                                            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                        },
                                        {
                                            date: "2023-06-30",
                                            title: "Quarterly Disclosure",
                                            type: "PDF",
                                            size: "0.8 MB",
                                            image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                        },
                                        {
                                            date: "2023-05-22",
                                            title: "Board Meeting Outcome",
                                            type: "PDF",
                                            size: "0.5 MB",
                                            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                        },
                                        {
                                            date: "2023-04-18",
                                            title: "Shareholding Pattern",
                                            type: "PDF",
                                            size: "0.7 MB",
                                            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                        },
                                        {
                                            date: "2023-03-31",
                                            title: "Annual Financial Statement",
                                            type: "PDF",
                                            size: "2.4 MB",
                                            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                        }
                                    ].map((filing, i) => (
                                        <motion.tr
                                            key={i}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.05 }}
                                            className="hover:bg-gray-50"
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{filing.date}</td>
                                            <td className="px-6 py-4 text-sm text-[#142a47] font-medium">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10 mr-3">
                                                        <img className="h-10 w-10 rounded object-cover" src={filing.image} alt={filing.title} />
                                                    </div>
                                                    {filing.title}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <span className="bg-[#f0f0f0] text-[#142a47] px-2 py-1 rounded-full text-xs font-medium">
                                                    {filing.type}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{filing.size}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <motion.a
                                                    whileHover={{ x: 2 }}
                                                    href="#"
                                                    className="text-[#A47148] hover:text-[#8a5f3a] flex items-center justify-end"
                                                >
                                                    Download
                                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                    </svg>
                                                </motion.a>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-6 flex justify-center">
                            <button className="px-6 py-2 border border-[#142a47] text-[#142a47] rounded-lg hover:bg-[#142a47] hover:text-white transition-colors">
                                View All Regulatory Filings
                            </button>
                        </div>
                    </motion.div>
                </>
            )
        },
        'policies-codes': {
            title: "Corporate Policies & Codes",
            content: (
                <div className="space-y-12">
                    {/* Header Section */}
                    <section className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-[#142a47] mb-4">Our Governance Framework</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            At the core of our operations lies a robust governance framework designed to uphold the highest standards of integrity, transparency, and accountability. Our policies are regularly reviewed to align with global best practices and evolving regulatory requirements.
                        </p>
                        <div className="bg-[#f8f9fa] p-6 rounded-xl border-l-4 border-[#A47148]">
                            <p className="text-[#142a47] italic font-medium">
                                "Strong governance is not just about compliance - it's about creating a culture of responsibility that permeates every level of our organization."
                            </p>
                        </div>
                    </section>

                    {/* Policy Cards Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {[
                            {
                                category: "Governance",
                                icon: "shield",
                                policies: [
                                    { name: "Code of Conduct", updated: "2023" },
                                    { name: "Whistleblower Policy", updated: "2024" },
                                    { name: "Related Party Transactions", updated: "2023" },
                                    { name: "Board Diversity Policy", updated: "2024" }
                                ],
                                description: "Ensuring ethical decision-making and accountability at all organizational levels"
                            },
                            {
                                category: "Risk & Compliance",
                                icon: "activity",
                                policies: [
                                    { name: "Risk Management Framework", updated: "2024" },
                                    { name: "Anti-Bribery & Anti-Corruption", updated: "2023" },
                                    { name: "Information Security Policy", updated: "2024" },
                                    { name: "Business Continuity Plan", updated: "2023" }
                                ],
                                description: "Identifying and mitigating operational risks while maintaining regulatory compliance"
                            },
                            {
                                category: "Financial Integrity",
                                icon: "dollar-sign",
                                policies: [
                                    { name: "Dividend Distribution Policy", updated: "2023" },
                                    { name: "Investment Guidelines", updated: "2024" },
                                    { name: "Capital Allocation Framework", updated: "2024" },
                                    { name: "Financial Disclosure Policy", updated: "2023" }
                                ],
                                description: "Maintaining fiscal responsibility and transparent financial reporting"
                            },
                            {
                                category: "Sustainability",
                                icon: "globe",
                                policies: [
                                    { name: "Environmental Stewardship", updated: "2024" },
                                    { name: "Social Responsibility Charter", updated: "2024" },
                                    { name: "Human Rights Commitment", updated: "2023" },
                                    { name: "Sustainable Supply Chain", updated: "2024" }
                                ],
                                description: "Driving positive environmental and social impact through responsible business"
                            }
                        ].map((group, index) => {
                            // Dynamically select icon component
                            const IconComponent = {
                                shield: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A47148" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
                                activity: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A47148" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
                                "dollar-sign": <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A47148" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>,
                                globe: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A47148" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                            }[group.icon];

                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all hover:shadow-xl"
                                >
                                    <div className="bg-[#9db4d1] p-4 flex items-center space-x-3">
                                        {IconComponent}
                                        <h3 className="text-xl font-semibold text-white">{group.category}</h3>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-gray-500 mb-4">{group.description}</p>
                                        <ul className="divide-y divide-gray-100">
                                            {group.policies.map((policy, i) => (
                                                <li key={i} className="py-3 flex justify-between items-center">
                                                    <div>
                                                        <p className="font-medium text-[#142a47]">{policy.name}</p>
                                                        <span className="text-xs text-gray-400">Last updated: {policy.updated}</span>
                                                    </div>
                                                    <button
                                                        className="text-[#A47148] hover:text-[#8a5d38] flex items-center text-sm font-medium transition-colors"
                                                    >
                                                        Details <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Code of Conduct Highlight */}
                    <section className="bg-gradient-to-r from-[#6581a5] to-[#3b66a1] rounded-2xl overflow-hidden">
                        <div className="p-8 md:p-10 flex flex-col md:flex-row">
                            <div className="md:w-2/3 pr-0 md:pr-8">
                                <div className="flex items-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A47148" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                                    <h3 className="text-xl font-bold text-white">Our Code of Conduct</h3>
                                </div>
                                <p className="text-white/90 mb-6 leading-relaxed">
                                    The cornerstone of our ethical framework, this document outlines the principles that guide our daily operations and long-term decision-making. It covers:
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                                    {[
                                        "Conflicts of interest",
                                        "Fair competition",
                                        "Data privacy",
                                        "Respect in workplace",
                                        "Anti-discrimination",
                                        "Gift policies",
                                        "Reporting mechanisms",
                                        "Sanctions compliance"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center text-white/90">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A47148" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                            <span className="text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="md:w-1/3 flex flex-col justify-center items-start md:items-end mt-6 md:mt-0">
                                <button
                                    className="bg-[#A47148] hover:bg-[#8a5d38] text-white font-medium py-3 px-6 rounded-lg flex items-center transition-all"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                    Download PDF
                                </button>
                                <div className="mt-4 text-white/70 text-sm flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    <span>Last updated: March 2024</span>
                                </div>
                                <div className="mt-2 text-white/70 text-sm flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                    <span>32 pages • 2.4 MB</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#0d1f36] px-8 py-4 flex flex-wrap items-center justify-between">
                            <p className="text-white/80 text-sm mb-2 md:mb-0">
                                Available in 12 languages including Español, 中文, and العربية
                            </p>
                            <div className="flex space-x-4">
                                <button className="text-white/70 hover:text-white text-sm flex items-center transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                                    Share
                                </button>
                                <button className="text-white/70 hover:text-white text-sm flex items-center transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
                                    Print
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Policy Development Process */}
                    <section className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                        <h3 className="text-xl font-bold text-[#142a47] mb-6">Policy Development Process</h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {[
                                {
                                    title: "Identification",
                                    description: "Regular gap analysis and regulatory monitoring",
                                    icon: "search"
                                },
                                {
                                    title: "Drafting",
                                    description: "Cross-functional collaboration with legal and subject experts",
                                    icon: "edit"
                                },
                                {
                                    title: "Review",
                                    description: "Stakeholder consultation and board committee oversight",
                                    icon: "eye"
                                },
                                {
                                    title: "Implementation",
                                    description: "Company-wide training and compliance monitoring",
                                    icon: "check-circle"
                                }
                            ].map((step, index) => {
                                const StepIcon = {
                                    search: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>,
                                    edit: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>,
                                    eye: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>,
                                    "check-circle": <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                }[step.icon];

                                return (
                                    <div key={index} className="bg-[#f8f9fa] p-5 rounded-lg hover:bg-[#e9ecef] transition-colors">
                                        <div className="bg-[#142a47] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                            {StepIcon}
                                        </div>
                                        <h4 className="font-semibold text-[#142a47] mb-2">{step.title}</h4>
                                        <p className="text-gray-600 text-sm">{step.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                </div>
            )
        },
        'social-impact': {
            title: "Social Impact & Sustainability",
            content: (
                <>
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#A47148] mb-4">Creating Positive Change</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Through responsible business practices and community-focused initiatives, we're building a sustainable future that benefits all stakeholders.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        {/* Hero Image Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.01 }}
                            className="lg:col-span-2 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 relative"
                        >
                            <div className="h-80 md:h-96 relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Community Impact"
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#142a47]/90 via-[#142a47]/30 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Transforming Communities</h3>
                                    <p className="text-white/90 max-w-lg">Our initiatives create measurable impact for over 2 million beneficiaries annually across India</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Stats Cards */}
                        <div className="space-y-6">
                            {[
                                {
                                    title: "Financial Inclusion",
                                    value: "2.5M+",
                                    description: "Individuals accessing formal credit",
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    )
                                },
                                {
                                    title: "Education",
                                    value: "50+",
                                    description: "Schools supported in rural areas",
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                        </svg>
                                    )
                                },
                                {
                                    title: "Livelihood",
                                    value: "1.2M+",
                                    description: "Entrepreneurs supported",
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    )
                                }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                                    className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                                >
                                    <div className="flex items-start">
                                        <div className="bg-[#A47148]/10 p-2 rounded-lg text-[#A47148] mr-4">
                                            {stat.icon}
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
                                            <p className="text-3xl font-bold text-[#142a47] mb-1">{stat.value}</p>
                                            <p className="text-gray-600 text-sm">{stat.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Focus Areas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {[
                            {
                                title: "Environmental Sustainability",
                                description: "Our commitment to reducing environmental impact through innovative solutions",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                    </svg>
                                ),
                                initiatives: [
                                    "Carbon neutral operations by 2030",
                                    "Paperless office initiatives reducing waste by 65%",
                                    "Renewable energy adoption across facilities",
                                    "Comprehensive waste reduction programs"
                                ],
                                color: "bg-emerald-100",
                                image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                            },
                            {
                                title: "Community Development",
                                description: "Empowering communities through education and economic opportunities",
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                ),
                                initiatives: [
                                    "Financial literacy programs reaching 500,000+ annually",
                                    "Women entrepreneurship support initiatives",
                                    "Rural education programs with 90% retention rate",
                                    "Healthcare access for underserved communities"
                                ],
                                color: "bg-amber-100",
                                image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                            }
                        ].map((focus, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
                            >
                                <div className="h-48 relative overflow-hidden">
                                    <img
                                        src={focus.image}
                                        alt={focus.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#142a47]/90 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <div className="flex items-center">
                                            <div className={`${focus.color} p-3 rounded-lg mr-4`}>
                                                {focus.icon}
                                            </div>
                                            <h4 className="text-xl font-bold text-white">{focus.title}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-600 mb-4">{focus.description}</p>
                                    <ul className="space-y-3">
                                        {focus.initiatives.map((item, i) => (
                                            <motion.li
                                                key={i}
                                                whileHover={{ x: 5 }}
                                                className="flex items-start"
                                            >
                                                <div className="bg-[#A47148]/10 p-1 rounded-full mr-3 mt-1">
                                                    <svg className="h-3 w-3 text-[#A47148]" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <span className="text-gray-700">{item}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Impact Reports */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-[#142a47]/5 to-[#A47148]/5 rounded-2xl p-8 border border-gray-200"
                    >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                            <div>
                                <h3 className="text-2xl font-bold text-[#142a47] mb-2">Impact Reports</h3>
                                <p className="text-gray-600">Download our detailed annual sustainability and community impact reports</p>
                            </div>
                            <button className="mt-4 md:mt-0 px-6 py-2 bg-[#142a47] text-white rounded-lg hover:bg-[#1e3a6b] transition-colors">
                                View All Reports
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[2023, 2022, 2021].map((year) => (
                                <motion.div
                                    key={year}
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                                >
                                    <div className="h-48 bg-gradient-to-br from-[#f9f9f9] to-[#f0f0f0] rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center z-10">
                                                <div className="bg-[#142a47]/10 text-[#142a47] text-4xl font-bold p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-2">
                                                    {year.toString().slice(2)}
                                                </div>
                                                <p className="text-gray-600 font-medium">Impact Report</p>
                                            </div>
                                        </div>
                                        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')] bg-cover bg-center"></div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <span className="text-sm text-gray-500">PDF, {(5.2 - (2023 - year) * 0.5).toFixed(1)} MB</span>
                                            <p className="text-sm text-gray-600">Released {year === 2023 ? "May 15, 2023" : year === 2022 ? "May 18, 2022" : "May 20, 2021"}</p>
                                        </div>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            className="text-[#A47148] font-medium flex items-center text-sm hover:text-[#8a5f3a]"
                                        >
                                            Download
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </>
            )
        },
        'financial-highlights': {
            title: "Financial Performance Highlights",
            content: (
                <div className="space-y-10">
                    {/* Header Section */}
                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-bold text-[#142a47] mb-3">Financial Performance</h2>
                        <p className="text-lg text-gray-600">
                            Our consistent financial performance reflects strong execution of our growth strategy,
                            operational efficiency, and prudent risk management across all business segments.
                        </p>
                    </div>

                    {/* Key Metrics Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Total Assets",
                                value: "₹12,345 Cr",
                                change: "+12% YoY",
                                isPositive: true,
                                trend: "up",
                                description: "Steady growth in asset base through strategic investments"
                            },
                            {
                                title: "Net Profit",
                                value: "₹1,234 Cr",
                                change: "+8% YoY",
                                isPositive: true,
                                trend: "up",
                                description: "Improved profitability through cost optimization"
                            },
                            {
                                title: "Revenue",
                                value: "₹4,567 Cr",
                                change: "+15% YoY",
                                isPositive: true,
                                trend: "up",
                                description: "Strong top-line growth across all business verticals"
                            }
                        ].map((metric, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
                            >
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-sm font-medium text-gray-500">{metric.title}</h3>
                                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${metric.isPositive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                            {metric.change}
                                        </span>
                                    </div>
                                    <p className="text-3xl font-bold text-[#142a47] mb-3">{metric.value}</p>
                                    <p className="text-sm text-gray-500 mb-4">{metric.description}</p>

                                    {/* Mini Chart */}
                                    <div className="h-20 relative">
                                        <div className="absolute bottom-0 left-0 right-0 h-full flex items-end">
                                            {[30, 45, 60, 35, 55, 40, 65].map((height, i) => (
                                                <div
                                                    key={i}
                                                    className="flex-1 mx-0.5 transition-all duration-300 ease-in-out"
                                                    style={{
                                                        height: `${height}%`,
                                                        backgroundColor: metric.isPositive ? '#A47148' : '#e53e3e',
                                                        opacity: 0.7 - (i * 0.07),
                                                        borderRadius: '3px 3px 0 0'
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#f8f9fa] px-6 py-3 border-t border-gray-100">
                                    <a href="#" className="text-[#A47148] text-sm font-medium flex items-center hover:underline">
                                        View details
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A47148" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Financial Ratios and Chart */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Ratios Table */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-xl font-semibold text-[#142a47]">Key Financial Ratios</h3>
                                    <span className="text-xs text-gray-500">All figures in percentage</span>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead>
                                            <tr>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Metric</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">2023</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">2022</th>
                                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {[
                                                { metric: "Return on Equity", y2023: "18.5", y2022: "16.2", change: "+2.3", trend: "up" },
                                                { metric: "Return on Assets", y2023: "3.2", y2022: "2.9", change: "+0.3", trend: "up" },
                                                { metric: "Net Interest Margin", y2023: "8.7", y2022: "8.2", change: "+0.5", trend: "up" },
                                                { metric: "Capital Adequacy", y2023: "17.8", y2022: "16.5", change: "+1.3", trend: "up" },
                                                { metric: "Gross NPA", y2023: "2.1", y2022: "2.5", change: "-0.4", trend: "down" }
                                            ].map((row, i) => (
                                                <tr key={i} className="hover:bg-gray-50">
                                                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-[#142a47]">{row.metric}</td>
                                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">{row.y2023}</td>
                                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{row.y2022}</td>
                                                    <td className="px-4 py-4 whitespace-nowrap">
                                                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${row.trend === 'up' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                                            {row.change}%
                                                            {row.trend === 'up' ? (
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                                                                    <line x1="12" y1="19" x2="12" y2="5"></line>
                                                                    <polyline points="5 12 12 5 19 12"></polyline>
                                                                </svg>
                                                            ) : (
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                                                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                                                    <polyline points="19 12 12 19 5 12"></polyline>
                                                                </svg>
                                                            )}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Performance Chart - Improved Version */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-xl font-semibold text-[#142a47]">Revenue Growth Trend (₹ Crores)</h3>
                                    <div className="flex space-x-2">
                                        <button className="text-xs px-3 py-1 bg-[#142a47] text-white rounded-full">5Y</button>
                                        <button className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">3Y</button>
                                        <button className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">1Y</button>
                                    </div>
                                </div>

                                {/* Chart Container */}
                                <div className="h-64 relative">
                                    {/* Y-axis */}
                                    <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between">
                                        {['4,000', '3,000', '2,000', '1,000', '0'].map((label, i) => (
                                            <span key={i} className="text-xs text-gray-500 pr-2 text-right">{label}</span>
                                        ))}
                                    </div>

                                    {/* Chart Area */}
                                    <div className="absolute left-8 right-0 top-0 bottom-0 pl-4">
                                        {/* Grid Lines */}
                                        <div className="absolute inset-0 flex flex-col justify-between">
                                            {[...Array(5)].map((_, i) => (
                                                <div key={i} className="border-t border-gray-100 w-full"></div>
                                            ))}
                                        </div>

                                        {/* Data Points */}
                                        <svg
                                            viewBox="0 0 500 200"
                                            preserveAspectRatio="none"
                                            className="w-full h-full"
                                        >
                                            {/* Line Path */}
                                            <path
                                                d="M0,160 L125,140 L250,100 L375,60 L500,20"
                                                fill="none"
                                                stroke="#A47148"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                            />

                                            {/* Data Points */}
                                            {[
                                                { x: 0, y: 160, value: 2200, year: '2019', growth: '+5%' },
                                                { x: 125, y: 140, value: 2500, year: '2020', growth: '+14%' },
                                                { x: 250, y: 100, value: 3100, year: '2021', growth: '+24%' },
                                                { x: 375, y: 60, value: 3900, year: '2022', growth: '+26%' },
                                                { x: 500, y: 20, value: 4567, year: '2023', growth: '+15%' }
                                            ].map((point, i) => (
                                                <g key={i} className="hover:opacity-90 transition-opacity">
                                                    <circle
                                                        cx={point.x}
                                                        cy={point.y}
                                                        r="6"
                                                        fill="#142a47"
                                                        stroke="#fff"
                                                        strokeWidth="2"
                                                    />
                                                    {/* Tooltip */}
                                                    <foreignObject
                                                        x={point.x - 40}
                                                        y={point.y - 50}
                                                        width="80"
                                                        height="40"
                                                        className="hidden md:block"
                                                    >
                                                        <div className="bg-[#142a47] text-white text-xs p-2 rounded text-center">
                                                            <div className="font-medium">{point.value} Cr</div>
                                                            <div>{point.growth}</div>
                                                        </div>
                                                    </foreignObject>
                                                </g>
                                            ))}
                                        </svg>

                                        {/* X-axis Labels */}
                                        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4">
                                            {['2019', '2020', '2021', '2022', '2023'].map((year, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs text-gray-500 text-center"
                                                    style={{ width: '20%' }}
                                                >
                                                    {year}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Reports Archive */}
                    <div className="bg-gradient-to-r from-[#142a47]/5 to-[#A47148]/5 p-8 rounded-2xl">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                            <div>
                                <h3 className="text-xl font-semibold text-[#142a47] mb-1">Financial Reports Archive</h3>
                                <p className="text-gray-600">Access our complete library of quarterly and annual reports</p>
                            </div>
                            <button className="mt-4 md:mt-0 bg-[#142a47] hover:bg-[#1a365d] text-white font-medium py-2 px-4 rounded-lg flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                                Download All Reports
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {[
                                { year: 2023, quarters: ["Q1", "Q2", "Q3", "Q4"], annual: true },
                                { year: 2022, quarters: ["Q1", "Q2", "Q3", "Q4"], annual: true },
                                { year: 2021, quarters: ["Q1", "Q2", "Q3", "Q4"], annual: true },
                                { year: 2020, quarters: ["Q1", "Q2", "Q3", "Q4"], annual: true }
                            ].map((yearData, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                                >
                                    <div className="p-4 border-b border-gray-100 bg-[#f8f9fa]">
                                        <h4 className="font-medium text-[#142a47]">{yearData.year} Reports</h4>
                                    </div>
                                    <div className="p-4">
                                        <div className="grid grid-cols-2 gap-3">
                                            {yearData.quarters.map((q, qi) => (
                                                <a
                                                    key={qi}
                                                    href="#"
                                                    className="text-sm text-[#A47148] hover:underline flex items-center justify-between py-1"
                                                >
                                                    <span>{q} Report</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#A47148" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                                        <polyline points="7 10 12 15 17 10"></polyline>
                                                        <line x1="12" y1="15" x2="12" y2="3"></line>
                                                    </svg>
                                                </a>
                                            ))}
                                        </div>
                                        {yearData.annual && (
                                            <a
                                                href="#"
                                                className="mt-3 text-sm font-medium text-[#142a47] hover:underline flex items-center justify-between py-1 border-t border-gray-100 pt-3"
                                            >
                                                <span>Annual Report</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#142a47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                                    <polyline points="7 10 12 15 17 10"></polyline>
                                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )
        }
    };


    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </Head>

            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-2 md:py-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {/* Premium Hero Section with Enhanced Financial Vectors */}
                <div className="relative overflow-hidden bg-gradient-to-b from-[#f8f9fa] to-white">
                    {/* Animated financial background elements */}
                    <div className="absolute inset-0 overflow-hidden z-0">
                        {/* Floating coins animation */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.05 }}
                            transition={{ duration: 2 }}
                            className="absolute top-1/4 left-1/4 w-64 h-64"
                        >
                            <svg viewBox="0 0 200 200" fill="none" className="text-[#A47148]">
                                <motion.circle
                                    cx="100"
                                    cy="100"
                                    r="40"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.path
                                    d="M100 60 L100 140 M60 100 L140 100"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                />
                            </svg>
                        </motion.div>

                        {/* Animated stock chart */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 0.03, x: 0 }}
                            transition={{ duration: 1.8, delay: 0.3 }}
                            className="absolute bottom-1/3 right-1/4 w-48 h-48"
                        >
                            <svg viewBox="0 0 200 100" fill="none" className="text-[#142a47]">
                                <motion.path
                                    d="M10 90 L40 60 L70 80 L100 40 L130 70 L160 30 L190 50"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 2, delay: 0.5 }}
                                />
                            </svg>
                        </motion.div>

                        {/* Floating financial elements */}
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{
                                    opacity: 0,
                                    y: Math.random() * 100 - 50,
                                    x: Math.random() * 200 - 100
                                }}
                                animate={{
                                    opacity: 0.03,
                                    y: Math.random() * 100 - 50,
                                    x: Math.random() * 200 - 100
                                }}
                                transition={{
                                    duration: 15 + Math.random() * 10,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "easeInOut"
                                }}
                                className="absolute w-16 h-16"
                                style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                }}
                            >
                                <svg viewBox="0 0 100 100" fill="none" className={i % 2 ? "text-[#A47148]" : "text-[#142a47]"}>
                                    {i % 3 === 0 ? (
                                        <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="1.5" />
                                    ) : i % 3 === 1 ? (
                                        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1.5" />
                                    ) : (
                                        <path d="M50 20 L80 80 L20 80 Z" stroke="currentColor" strokeWidth="1.5" />
                                    )}
                                </svg>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-8 md:mb-10 relative z-10 container mx-auto px-6 py-12">
                        {/* Left Content */}
                        <div className="lg:w-1/2 flex items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="w-full"
                            >
                                <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-2xl border-l-8 border-[#A47148] overflow-hidden">
                                    {/* Animated financial corner decoration */}
                                    <motion.div
                                        className="absolute top-0 right-0 w-32 h-32 overflow-hidden"
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                    >
                                        <svg
                                            className="absolute top-0 right-0 w-full h-full text-[#A47148]/10"
                                            viewBox="0 0 100 100"
                                            preserveAspectRatio="none"
                                        >
                                            <path d="M0,0 L100,0 L100,100 Z" fill="currentColor" />
                                        </svg>
                                    </motion.div>

                                    {/* Animated financial growth chart */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 0.1, scale: 1 }}
                                        transition={{ delay: 0.5, duration: 0.8 }}
                                        className="absolute bottom-4 left-4 w-24 h-24 text-[#142a47]"
                                    >
                                        <svg viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <motion.path
                                                d="M5 55 L20 35 L35 45 L50 25 L65 40 L80 30 L95 50"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: 1 }}
                                                transition={{ duration: 1.5, delay: 0.7 }}
                                            />
                                            <path d="M5 55 L95 55" strokeLinecap="round" />
                                            <path d="M5 55 L5 5" strokeLinecap="round" />
                                        </svg>
                                    </motion.div>

                                    {/* Currency symbol animation */}
                                    <motion.div
                                        initial={{ opacity: 0, rotate: -30 }}
                                        animate={{ opacity: 0.05, rotate: 0 }}
                                        transition={{ delay: 0.8, duration: 0.8 }}
                                        className="absolute top-8 right-8 w-16 h-16 text-[#A47148]"
                                    >
                                        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M50 20 L50 80 M30 50 H70" strokeLinecap="round" />
                                            <circle cx="50" cy="50" r="15" strokeDasharray="1 4" />
                                        </svg>
                                    </motion.div>

                                    <motion.h1
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2, duration: 0.6 }}
                                        className="text-4xl md:text-5xl font-bold text-[#142a47] mb-6 leading-tight"
                                        style={{ fontFamily: "'Playfair Display', serif" }}
                                    >
                                        Investor <span className="text-[#A47148]">Relations</span>
                                    </motion.h1>

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                        className="space-y-6"
                                    >
                                        <div className="flex items-start">
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 0.5, type: "spring" }}
                                            >
                                                <svg className="w-5 h-5 text-[#A47148] mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </motion.div>
                                            <motion.p
                                                className="text-lg md:text-xl text-gray-600"
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.6 }}
                                            >
                                                We are growing, with both physical expansion and digital transition lined up for achieving our future growth prospects.
                                            </motion.p>
                                        </div>

                                        <div className="flex items-start">
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 0.7, type: "spring" }}
                                            >
                                                <svg className="w-5 h-5 text-[#A47148] mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                </svg>
                                            </motion.div>
                                            <motion.p
                                                className="text-gray-600"
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.8 }}
                                            >
                                                Disclosures under Regulation 62 of the LODR:
                                            </motion.p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.8, duration: 0.5 }}
                                        className="mt-8"
                                    >
                                        <button className="group relative overflow-hidden bg-gradient-to-r from-[#A47148] to-[#8a5f3a] text-white font-medium py-3 px-8 rounded-xl hover:shadow-lg transition-all shadow-md flex items-center">
                                            <span className="relative z-10 flex items-center">
                                                View Disclosures
                                                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </span>
                                            <span className="absolute inset-0 bg-[#142a47] opacity-0 group-hover:opacity-10 transition-opacity"></span>

                                            {/* Button animation elements */}
                                            <motion.span
                                                className="absolute top-0 left-0 w-full h-0.5 bg-white"
                                                initial={{ scaleX: 0 }}
                                                whileHover={{ scaleX: 1 }}
                                                transition={{ duration: 0.3 }}
                                                style={{ originX: 0 }}
                                            />
                                            <motion.span
                                                className="absolute bottom-0 right-0 w-0.5 h-full bg-white"
                                                initial={{ scaleY: 0 }}
                                                whileHover={{ scaleY: 1 }}
                                                transition={{ duration: 0.3 }}
                                                style={{ originY: 0 }}
                                            />
                                        </button>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Image */}
                        <div className="lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="h-full relative"
                            >
                                {/* Animated financial chart decoration */}
                                <motion.div
                                    className="absolute -top-4 -left-4 w-20 h-20 z-10"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <svg viewBox="0 0 100 60" fill="none" className="text-[#A47148]">
                                        <motion.path
                                            d="M5 55 L25 30 L45 45 L65 20 L85 40 L95 25"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 1.5, delay: 0.6 }}
                                        />
                                    </svg>
                                </motion.div>

                                {/* Percentage indicator */}
                                <motion.div
                                    className="absolute -bottom-4 -right-4 w-24 h-24 z-10 bg-[#142a47] rounded-full flex items-center justify-center shadow-xl"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.7, type: "spring" }}
                                >
                                    <motion.div
                                        initial={{ rotate: -90, scale: 0 }}
                                        animate={{ rotate: 0, scale: 1 }}
                                        transition={{ delay: 0.8, type: "spring" }}
                                        className="text-white font-bold text-xl"
                                    >
                                        +24%
                                    </motion.div>
                                </motion.div>

                                {/* Main image container */}
                                <div className="relative h-full bg-gradient-to-br from-[#142a47] to-[#A47148] rounded-3xl overflow-hidden shadow-2xl">
                                    {/* Animated financial pattern overlay */}
                                    <motion.div
                                        className="absolute inset-0 opacity-10"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0.1 }}
                                        transition={{ duration: 1, delay: 0.4 }}
                                    >
                                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                            <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                                <motion.circle
                                                    cx="10"
                                                    cy="10"
                                                    r="1"
                                                    fill="#ffffff"
                                                    initial={{ r: 0 }}
                                                    animate={{ r: 1 }}
                                                    transition={{ duration: 0.5, delay: 0.9 }}
                                                />
                                            </pattern>
                                            <rect x="0" y="0" width="100" height="100" fill="url(#pattern)" />
                                        </svg>
                                    </motion.div>

                                    {/* Image with parallax effect */}
                                    <motion.img
                                        src="/15855.jpg"
                                        alt="SK Finance Investors"
                                        className="w-full h-full object-cover"
                                        initial={{ scale: 1.05 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 1.2, ease: "easeOut" }}
                                        whileHover={{ scale: 1.02 }}
                                    />

                                    {/* Floating financial elements over image */}
                                    <motion.div
                                        className="absolute top-8 right-8 w-16 h-16"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1 }}
                                    >
                                        <svg viewBox="0 0 100 100" fill="none" className="text-white/80">
                                            <path
                                                d="M50 20 L80 50 L50 80 L20 50 Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeDasharray="5 2"
                                            />
                                        </svg>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
                {/* Tab Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-12 overflow-x-auto"
                >
                    <div className="flex space-x-2 pb-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-3 border-b-2 border-[#A47148] font-medium whitespace-nowrap transition-colors ${activeTab === tab.id
                                    ? 'bg-[#ebded5] text-[#142a47] shadow-md'
                                    : 'bg-white text-[#142a47] hover:bg-gray-100 shadow-sm'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Enhanced Tab Content */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative bg-white rounded-3xl shadow-2xl p-4 sm:6 md:p-10 border border-gray-100 overflow-hidden"
                >
                    {/* Decorative corner vectors */}
                    <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
                        <svg
                            className="absolute top-0 right-0 w-full h-full text-[#A47148]/10"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                        >
                            <path d="M0,0 L100,0 L100,100 Z" fill="currentColor" />
                        </svg>
                    </div>

                    {/* Floating abstract shapes */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.05 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="absolute bottom-4 left-4 w-24 h-24 text-[#142a47]"
                    >
                        <svg viewBox="0 0 100 100" fill="currentColor">
                            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" />
                            <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" fill="none" />
                        </svg>
                    </motion.div>

                    {/* Tab header with animated icon */}
                    <div className="flex items-start mb-8 relative z-10">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="mr-4 p-2 bg-[#142a47]/10 rounded-lg"
                        >
                            <svg
                                className="w-8 h-8 text-[#A47148]"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                            >
                                {activeTab === 'financials' && (
                                    <>
                                        <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path d="M12 10V14H15"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </>
                                )}
                                {activeTab === 'presentations' && (
                                    <path d="M15 10L19.5528 7.72361C20.2177 7.39116 21 7.87465 21 8.61803V15.382C21 16.1253 20.2177 16.6088 19.5528 16.2764L15 14M5 18H13C14.1046 18 15 17.1046 15 16V8C15 6.89543 14.1046 6 13 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                )}
                                {activeTab === 'governance' && (
                                    <path d="M9 12L11 14L15 10M12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C9.34784 22 6.8043 20.9464 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2Z"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                )}
                                {activeTab === 'policies' && (
                                    <path d="M9 13H15M9 17H15M13 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V9M13 3L19 9M13 3V9H19"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                )}
                            </svg>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                            className="text-2xl md:text-3xl font-bold text-[#142a47] leading-tight mt-1"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            {tabContents[activeTab]?.title || 'Content'}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="w-full h-1 bg-[#A47148]/30 mt-2 origin-left"
                            />
                        </motion.h2>
                    </div>

                    {/* Content area with subtle animation */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="relative z-10"
                    >
                        {tabContents[activeTab]?.content || (
                            <motion.div
                                initial={{ scale: 0.95 }}
                                animate={{ scale: 1 }}
                                className="flex flex-col items-center justify-center py-12 text-center"
                            >
                                <svg
                                    className="w-20 h-20 text-gray-300 mb-6"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path d="M12 8V12L15 15"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <p className="text-gray-500 text-lg font-medium">Select a tab to view content</p>
                                <p className="text-gray-400 mt-2">Explore our investor resources</p>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Animated bottom border */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#A47148]/30 via-[#A47148] to-[#A47148]/30 origin-left"
                    />
                </motion.div>
            </div>
        </>
    );
};

export default Investors;