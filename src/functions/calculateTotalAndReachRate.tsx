import data from "@/mock/mock.json";

export function calculateTotalAndReachRate(influencer, year) {
    const filteredData = data.filter(entry => entry.influencer === influencer && entry.year === year);
    let totalCount = 0;
    let totalReachRate = 0;

    filteredData.forEach(entry => {
        totalCount += entry.count;
        totalReachRate += entry.reach_rate;
    });

    const totalReachPercentage = parseFloat((totalReachRate / totalCount) * 100).toFixed(2);

    return  totalReachPercentage ;
}
