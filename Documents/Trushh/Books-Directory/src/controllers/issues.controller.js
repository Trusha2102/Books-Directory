const { Issue } = require("../../models/");

// Controller function for getting all issues
const getAllIssues = async (req, res) => {
  try {
    const issues = await Issue.findAll();
    res.json(issues);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller function for creating a new issue
const createIssue = async (req, res) => {
  try {
    const {
      book_id,
      student_name,
      branch,
      semester,
      enrollment_no,
      date_of_issue,
      date_of_return,
      penalty,
    } = req.body;
    const newIssue = await Issue.create({
      book_id: book_id,
      student_name: student_name,
      branch: branch,
      semester: semester,
      enrollment_no: enrollment_no,
      date_of_issue: date_of_issue,
      date_of_return: date_of_return,
      penalty: penalty,
    });
    res.status(201).json(newIssue);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateIssue = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      book_id,
      student_name,
      branch,
      semester,
      enrollment_no,
      date_of_issue,
      date_of_return,
      penalty,
    } = req.body;

    // Find the issue by its ID
    const issue = await Issue.findByPk(id);

    if (!issue) {
      return res.status(404).json({ error: "Issue not found" });
    }

    // Update the issue's properties
    issue.book_id = book_id;
    issue.student_name = student_name;
    issue.branch = branch;
    issue.semester = semester;
    issue.enrollment_no = enrollment_no;
    issue.date_of_issue = date_of_issue;
    issue.date_of_return = date_of_return;
    issue.penalty = penalty;

    // Save the updated issue to the database
    await issue.save();

    res.json(issue);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteIssue = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the issue by its ID
    const issue = await Issue.findByPk(id);

    if (!issue) {
      return res.status(404).json({ error: "Issue not found" });
    }

    // Delete the issue from the database
    await issue.destroy();

    res.json({ message: "Issue deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Export the controller functions
module.exports = {
  getAllIssues,
  createIssue,
  updateIssue,
  deleteIssue,
};
