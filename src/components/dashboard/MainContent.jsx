import BarChartComponent from "../charts/BarChartComponent.jsx";
import LineChartComponent from "../charts/LineChartComponent.jsx";
import PieChartComponent from "../charts/PieChartComponent.jsx";
import ScatterChartComponent from "../charts/ScatterChartComponent.jsx";

function MainContent({ isSidebarOpen, isChatOpen }) {
    return (
        <main 
            className={`flex-1 p-6 overflow-y-auto h-screen transition-all duration-300 ${
                isSidebarOpen ? 'ml-48' : 'ml-0'
            } ${
                isChatOpen ? 'mr-110' : 'mr-0'
            }`}
        >
            {/* Main content area */}
            <div className="space-y-6 pt-16"> {/* pt-16 for navbar space */}
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="backdrop-blur-lg bg-smoke/20 border border-border-color rounded-xl p-6">
                        <div className="text-sm text-textPrimary/60 mb-1">Total Views</div>
                        <div className="text-3xl font-bold text-text-main">5,279</div>
                        <div className="text-xs text-smoke/40 mt-1">Last 30 days</div>
                    </div>
                    <div className="backdrop-blur-lg bg-smoke/20 border border-border-color rounded-xl p-6">
                        <div className="text-sm text-textPrimary/60 mb-1">Active Users</div>
                        <div className="text-3xl font-bold text-text-main">1,234</div>
                        <div className="text-xs text-smoke/40 mt-1">Currently online</div>
                    </div>
                    <div className="backdrop-blur-lg bg-smoke/20 border border-border-color rounded-xl p-6">
                        <div className="text-sm text-textPrimary/60 mb-1">Engagement</div>
                        <div className="text-3xl font-bold text-text-main">95%</div>
                        <div className="text-xs text-smoke/40 mt-1">Average rate</div>
                    </div>
                </div>

                {/* Data Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <PieChartComponent />
                    <BarChartComponent />
                    <ScatterChartComponent />
                    <LineChartComponent />
                    
                    <div className="backdrop-blur-lg bg-smoke/20 border border-border-color rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-text-main mb-3">Recent Activity</h3>
                        <div className="space-y-3">
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="flex items-center gap-3 p-3 rounded-lg hover:bg-smoke/10 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-smoke/30 flex items-center justify-center">
                                        <span className="text-text-main">{item}</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm text-textPrimary">Activity Item {item}</div>
                                        <div className="text-xs text-textPrimary/40">2 hours ago</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="backdrop-blur-lg bg-smoke/20 border border-border-color rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-text-main mb-3">Top Performers</h3>
                        <div className="space-y-3">
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="flex items-center justify-between p-3 rounded-lg hover:bg-smoke/10 transition-colors">
                                    <span className="text-textPrimary">Item {item}</span>
                                    <span className="text-sm text-textPrimary/60">{item * 25}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Extra content to demonstrate scroll */}
                <div className="backdrop-blur-lg bg-smoke/20 border border-border-color rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-textPrimary mb-3">Additional Section</h3>
                    <p className="text-textPrimary/60">This section demonstrates that only the main content area scrolls while sidebar and chat area remain fixed.</p>
                </div>
            </div>
        </main>
    );
}

export default MainContent;
