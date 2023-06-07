function markAttendance() {
  const attendanceInput = document.getElementById("attendance").value;
  const attendanceArr = attendanceInput.split(",").map((str) => str.trim());

  // Check if the number of entries matches the number of students
  if (attendanceArr.length !==10) {
    alert("Invalid attendance! Please enter attendance for all students.");
    return;
  }

  // Check if the values are valid (either "Present" or "Absent")
  if (
    !attendanceArr.every(
      (value) => value === "p" || value === "ab" || value === "late"
    )
  ) {
    alert("Invalid attendance! Please enter attendance for all students.");
    return;
  }

  // Update attendance in the table
  document.getElementById("std1-attendance").textContent = attendanceArr[0];
  document.getElementById("std2-attendance").textContent = attendanceArr[1];
  document.getElementById("std3-attendance").textContent = attendanceArr[2];
  document.getElementById("std4-attendance").textContent = attendanceArr[3];
  document.getElementById("std5-attendance").textContent = attendanceArr[4];
  document.getElementById("std6-attendance").textContent = attendanceArr[5];
  document.getElementById("std7-attendance").textContent = attendanceArr[6];
  document.getElementById("std8-attendance").textContent = attendanceArr[7];
  document.getElementById("std9-attendance").textContent = attendanceArr[8];
  document.getElementById("std10-attendance").textContent = attendanceArr[9];

  // Clear the attendance input field
  
}