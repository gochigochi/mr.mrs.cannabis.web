export const computeVotes = (vts) => {

    const temp = {}

    vts.forEach(vote => {

        if (Object.keys(temp).includes(vote.category)) {

            const index = temp[vote.category].findIndex(vt => vt.nominee === vote.nominee)

            if (index !== -1) {
                temp[vote.category][index].votes++
            }

            if (index === -1) {
                temp[vote.category].push({ nominee: vote.nominee, votes: 1 })
            }

        } else {

            temp[vote.category] = [
                { nominee: vote.nominee, votes: 1 }
            ]
        }


    })

    return temp
}