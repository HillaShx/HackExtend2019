import axios from 'axios'



export const getRecPoints = async (materials, currentLocation) => {
    const points = await axios.get('api/points', {
        parameters: {
            materials, currentLocation
        }
    })
    return points
}