

export const registerUser= async (
    req,
    res
) => {
    try {
        
    } catch (error) {
        console.log(`error in registering`);
        return res.status(500).json({
            message:`error ${error}`
        })
    }
}