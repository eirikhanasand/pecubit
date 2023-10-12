/**
 * Fetches and returns the lottery winners
 * @returns Lottery data
 */
export default async function fetchPurchased(): Promise<LotteryNumbers | undefined> {
    try {
        const response = await fetch("http://localhost:3000/purchased", {method: 'GET'})
        
        if (!response.ok) {
            throw new Error(`Failed to fetch lottery.`)
        }
        
        return response.json()
    } catch (error) {
        console.log(error)
        return undefined
    }
}

/**
 * Posts purchased lottery numbers
 * @returns Updated values
 */
export async function postPurchased(purchased: LotteryNumbers): Promise<LotteryNumbers | undefined> {
    try {
        const response = await fetch("http://localhost:3000/purchased", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(purchased),
        })
        
        if (!response.ok) {
            throw new Error(`Failed to post purchased.`)
        }
        
        return response.json()
    } catch (error) {
        console.log(error)
        return undefined
    }
}

/**
 * Updates purchased lottery numbers
 * @returns Updated values
 */
export async function putPurchased(purchased: LotteryNumbers): Promise<LotteryNumbers | undefined> {
    try {
        const response = await fetch("http://localhost:3000/purchased", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(purchased),
        })
        
        if (!response.ok) {
            throw new Error(`Failed to update purchased.`)
        }
        
        return response.json()
    } catch (error) {
        console.log(error)
        return undefined
    }
}

/**
 * Deletes the purchased lottery numbers
 * @returns Result
 */
export async function deletePurchased(): Promise<LotteryNumbers | undefined> {
    try {
        const response = await fetch("http://localhost:3000/purchased", {method: 'DELETE'})
        
        if (!response.ok) {
            throw new Error(`Failed to delete purchased.`)
        }
        
        return response.json()
    } catch (error) {
        console.log(error)
        return undefined
    }
}
