import data from "@/mock/mock.json";


export function findTop3InfluencersByReachRate() {
    const influencers = {};

    // Her influencer için toplam reach_rate yüzdesini hesapla
    data.forEach(entry => {
        if (!influencers.hasOwnProperty(entry.influencer)) {
            influencers[entry.influencer] = {
                totalShares: 0,
                totalReachRate: 0
            };
        }
        influencers[entry.influencer].totalShares += entry.count;
        influencers[entry.influencer].totalReachRate += entry.reach_rate;
    });

    // Toplam reach_rate yüzdesi en yüksek olan 3 influencer'ı bul
    const top3 = Object.keys(influencers)
        .map(influencer => ({
            influencer,
            reachRatePercentage: (influencers[influencer].totalReachRate / influencers[influencer].totalShares) * 100
        }))
        .sort((a, b) => b.reachRatePercentage - a.reachRatePercentage)
        .slice(0, 3);

    return top3;
}


