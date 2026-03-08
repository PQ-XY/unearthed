import {pool} from '../config/database.js'

const getGifts = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM gifts ORDER BY id ASC')
        res.status(200).json(result.rows)
    } catch (err) {
        console.error('⚠️ error fetching gifts', err)
        res.status(409).json({error: 'Internal server error'})
    }
}

export default {
    getGifts
}