import data from "@/mock/mock.json";

export function calculateStatistic(influencer) {
    const filteredData2020 = data.filter(entry => entry.influencer === influencer && entry.year === 2020);
    const filteredData2021 = data.filter(entry => entry.influencer === influencer && entry.year === 2021);

    const result = {
        static: 0,
        reels: 0,
        story: 0
    };

    // 2020 ve 2021 yıllarındaki her bir paylaşım türü için hesaplamaları yap
    ['static', 'reels', 'story'].forEach(type => {
        const entry2020 = filteredData2020.find(entry => entry.type === type);
        const entry2021 = filteredData2021.find(entry => entry.type === type);

        if (entry2020 && entry2021) {
            // 2020 ve 2021 yıllarındaki reach_rate'lerin toplam paylaşım sayısına oran farkını hesapla
            const reachRateDiff = ((entry2021.reach_rate / entry2021.count) - (entry2020.reach_rate / entry2020.count)) * 100;
            result[type] = parseFloat(reachRateDiff.toFixed(2));
        }
    });

    // 2020 ve 2021 yıllarındaki toplam paylaşım sayıları ve reach_rate farklarını hesapla
    const {
        sharesDifference: sharesDiff,
        reachRateDifference: reachRateDiff
    } = compareYearlyShareDifference(influencer);

    result['sharesDifference'] = sharesDiff;
    result['reachRateDifference'] = reachRateDiff;

    return result;
}

// İki yıl arasındaki toplam paylaşım sayısı ve reach_rate farkını hesapla
function compareYearlyShareDifference(influencer) {
    const filteredData2020 = data.filter(entry => entry.influencer === influencer && entry.year === 2020);
    const filteredData2021 = data.filter(entry => entry.influencer === influencer && entry.year === 2021);

    let totalShares2020 = 0;
    let totalShares2021 = 0;
    let totalReachRate2020 = 0;
    let totalReachRate2021 = 0;

    // 2020 yılındaki toplam paylaşım sayısı ve reach_rate'i hesapla
    filteredData2020.forEach(entry => {
        totalShares2020 += entry.count;
        totalReachRate2020 += entry.reach_rate;
    });

    // 2021 yılındaki toplam paylaşım sayısı ve reach_rate'i hesapla
    filteredData2021.forEach(entry => {
        totalShares2021 += entry.count;
        totalReachRate2021 += entry.reach_rate;
    });

    // 2020 ve 2021 yıllarındaki toplam paylaşım sayısı ve reach_rate farklarını hesapla
    const sharesDifference = parseFloat((((totalShares2021 - totalShares2020) / totalShares2020) * 100).toFixed(2));
    const reachRateDifference = parseFloat((((totalReachRate2021 - totalReachRate2020) / totalReachRate2020) * 100).toFixed(2));

    return { sharesDifference, reachRateDifference };
}

