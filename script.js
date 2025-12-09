
// Data for Services
const serviceData = {
    'financial-planning': {
        title: 'Financial Planning',
        subtitle: 'A comprehensive roadmap for your financial future.',
        content: `
                    <p class="mb-4">Our financial planning service goes beyond simple budgeting. We create a holistic view of your financial life, integrating your current assets, future income liabilities, and personal goals into a cohesive strategy.</p>
                    <p class="mb-4"><strong>We help you answer questions like:</strong></p>
                    <ul class="list-disc pl-5 mb-4 space-y-2">
                        <li>When can I realistically retire?</li>
                        <li>How can I fund my children's education?</li>
                        <li>Am I adequately insured against unforeseen events?</li>
                    </ul>
                    <p>By using advanced modeling software and deep industry expertise, we stress-test your plan against various market conditions to ensure resilience.</p>
                `
    },
    'investment-guidance': {
        title: 'Investment Guidance',
        subtitle: 'Data-driven portfolio management aligned with your goals.',
        content: `
                    <p class="mb-4">Investing is not about chasing the latest hot stock; it's about disciplined asset allocation and risk management. Our team constructs portfolios designed to maximize returns for your specific risk tolerance.</p>
                    <p class="mb-4"><strong>Our Investment Philosophy:</strong></p>
                    <ul class="list-disc pl-5 mb-4 space-y-2">
                        <li><strong>Diversification:</strong> Spreading risk across asset classes and geographies.</li>
                        <li><strong>Low Costs:</strong> Minimizing fees that eat into long-term returns.</li>
                        <li><strong>Long-term Focus:</strong> Ignoring short-term market noise to focus on fundamentals.</li>
                    </ul>
                    <p>We provide regular performance reviews and rebalance your portfolio to keep it on track.</p>
                `
    },
    'business-advisory': {
        title: 'Business Advisory',
        subtitle: 'Strategic insights to scale operations and improve profitability.',
        content: `
                    <p class="mb-4">Running a business is complex. Our advisory services act as an extension of your management team, providing the financial acumen needed to make big decisions with confidence.</p>
                    <p class="mb-4"><strong>Key Focus Areas:</strong></p>
                    <ul class="list-disc pl-5 mb-4 space-y-2">
                        <li>Cash flow optimization and forecasting.</li>
                        <li>Mergers and Acquisitions (M&A) support.</li>
                        <li>Succession planning for family-owned enterprises.</li>
                        <li>Operational efficiency audits.</li>
                    </ul>
                    <p>Whether you are a startup looking for capital or a mature business looking to exit, we guide you through every stage of the business lifecycle.</p>
                `
    },
    'tax-strategy': {
        title: 'Tax Strategy',
        subtitle: 'Proactive planning to minimize liability and ensure compliance.',
        content: `
                    <p class="mb-4">Tax laws are constantly changing. Our team stays ahead of the curve to ensure you are taking advantage of every available credit and deduction while remaining fully compliant.</p>
                    <p class="mb-4"><strong>What we offer:</strong></p>
                    <ul class="list-disc pl-5 mb-4 space-y-2">
                        <li>Strategic tax planning (year-round, not just at tax time).</li>
                        <li>Corporate structure analysis for tax efficiency.</li>
                        <li>Estate and gift tax planning.</li>
                        <li>Representation before tax authorities.</li>
                    </ul>
                    <p>We don't just file your taxes; we design strategies to reduce what you owe legally, freeing up capital for reinvestment.</p>
                `
    }
};

// Router Function
function router(pageId) {
    // Hide all sections
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
    });

    // Show target section
    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// Show Service Detail
function showServiceDetail(serviceKey) {
    const data = serviceData[serviceKey];
    if (data) {
        document.getElementById('detail-title').innerText = data.title;
        document.getElementById('detail-subtitle').innerText = data.subtitle;
        document.getElementById('detail-content').innerHTML = data.content;
        router('service-detail');
    }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}
