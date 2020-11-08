const axios = require(`axios`);
exports.sourceNodes = async (
    { actions, createNodeId, createContentDigest },
    { apiKey }
) => {
    // let { createNode } = actions;

    // const result55 = await axios.get(`https://103.68.77.68/services?securitycode=vietlotcmc&jsondata={"Command":"Get655Result","JsonData":"{\\"PageSize\\":1000,\\"Segment\\":0,\\"TopN\\":0}"}`, {
    //     headers: { "Host": 'vietlott.vn' }
    // });
    // result55.data.forEach((data55, index) => {
    //     createNode({
    //         ...data,
    //         id: createNodeId(data55.GameResult655Id),
    //         internal: {
    //             // Tell Gatsby this is a new node type, so you can query it
    //             type: `jackpot55`,
    //             content: JSON.stringify(data55),
    //             contentDigest: createContentDigest(data55),
    //         },
    //     });
    // });
    // const result45 = await axios.get(`https://103.68.77.68/services/?securitycode=vietlotcmc&jsondata={"Command":"Get645Result","JsonData":"{\\"PageSize\\":1000,\\"Segment\\":0,\\"TopN\\":0}"}`, {
    //     headers: { "Host": 'vietlott.vn' }
    // });
    // result45.data.forEach((data45, index) => {
    //     createNode({
    //         ...data,
    //         id: createNodeId(data45.GameResult645Id),
    //         internal: {
    //             // Tell Gatsby this is a new node type, so you can query it
    //             type: `jackpot45`,
    //             content: JSON.stringify(data45),
    //             contentDigest: createContentDigest(data45),
    //         },
    //     });
    // });
};