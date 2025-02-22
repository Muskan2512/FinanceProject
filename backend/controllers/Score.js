const User = require("../models/User");

// Get user score and level by user ID
exports.getUserScoreAndLevel = async (req, res) => {
  try {
    // console.log(req.params)
    const { userId } = req.params; 

    // Check if userId is provided
    if (!userId) {
      return res.status(400).json({ success: false, message: "User ID is required" });
    }

    // Find user by ID
    const user = await User.findById(userId);

    // If user not found
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Send user score and level as response
    res.status(200).json({
      success: true,
      data: {
        userId: user._id,
        userName: user.userName,
        totalScore: user.totalScore,
        level: user.level,
      },
    });

  } catch (error) {
    console.error("Error fetching user score and level:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};



exports.updateScoreAndLevel = async (req, res) => {
  try {
    const { userId, newScore } = req.body;
    // console.log(userId,newScore);
    if (!userId || newScore === undefined) {
      return res.status(400).json({ error: "User ID and score are required" });
    }

    // Find the user by ID
    let user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update score and level based on score thresholds
    let updatedScore = user.totalScore + newScore;
    let updatedLevel = 1;
    
    // Update level based on total score (Define your own level-up logic)
    if (updatedScore >= 100) {
      updatedLevel = 3;
    } else if (user.totalScore >= 75) {
      updatedLevel = 2;
    } else {
      updatedLevel = 1;
    }
    
    await User.findByIdAndUpdate(
      userId,
      { totalScore:updatedScore, level: updatedLevel },
      { new: true, runValidators: true } // Ensures validation only on fields being updated
    );
    // console.log(updatedLevel,updatedScore);

    res.json({ message: "Score updated successfully", totalScore: updatedScore, level: updatedLevel });

  } catch (error) {
    console.error("Error updating score and level:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
