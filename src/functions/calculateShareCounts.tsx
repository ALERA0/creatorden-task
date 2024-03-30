import data from "@/mock/mock.json";

export function calculateShareCounts(influencer, year) {
    const filteredData = data.filter(entry => entry.influencer === influencer && entry.year === year);
    const shareCounts = {
        story: 0,
        static: 0,
        reels: 0
    };
    const reachRates = {
        story: 0,
        static: 0,
        reels: 0
    };

    filteredData.forEach(entry => {
        switch(entry.type) {
            case 'story':
                shareCounts.story += entry.count;
                reachRates.story += entry.reach_rate;
                break;
            case 'static':
                shareCounts.static += entry.count;
                reachRates.static += entry.reach_rate;
                break;
            case 'reels':
                shareCounts.reels += entry.count;
                reachRates.reels += entry.reach_rate;
                break;
            default:
                break;
        }
    });
    
    const totalShares = shareCounts.story + shareCounts.static + shareCounts.reels;
    const storyPercentage = parseFloat(((shareCounts.story / totalShares) * 100).toFixed(2));
    const staticPercentage = parseFloat(((shareCounts.static / totalShares) * 100).toFixed(2));
    const reelsPercentage = parseFloat(((shareCounts.reels / totalShares) * 100).toFixed(2));

    const totalReach = reachRates.story + reachRates.static + reachRates.reels;
    const storyReachPercentage = parseFloat(((reachRates.story /shareCounts.story  ) * 100).toFixed(2));
    const staticReachPercentage = parseFloat(((reachRates.static / shareCounts.static  ) * 100).toFixed(2));
    const reelsReachPercentage = parseFloat(((reachRates.reels / shareCounts.reels  ) * 100).toFixed(2));

    const storyReachRatePercentage = parseFloat(((reachRates.story / shareCounts.story) * 100).toFixed(2));
    const staticReachRatePercentage = parseFloat(((reachRates.static / shareCounts.static) * 100).toFixed(2));
    const reelsReachRatePercentage = parseFloat(((reachRates.reels / shareCounts.reels) * 100).toFixed(2));

    return {
        shareCounts,
        storyPercentage,
        staticPercentage,
        reelsPercentage,
        storyReachPercentage,
        staticReachPercentage,
        reelsReachPercentage,
        storyReachRatePercentage,
        staticReachRatePercentage,
        reelsReachRatePercentage
    };
}
