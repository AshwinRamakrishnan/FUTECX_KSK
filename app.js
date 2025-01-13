
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
        import { getFirestore, doc, setDoc, Timestamp, getDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
        import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

        const firebaseConfig = {
            apiKey: "AIzaSyDUcPaGdOPQtsk9YqMeDWqvNKWFu7I-F_o",
            authDomain: "test-420914.firebaseapp.com",
            databaseURL: "https://test-420914-default-rtdb.firebaseio.com",
            projectId: "test-420914",
            storageBucket: "test-420914.appspot.com",
            messagingSenderId: "551223275238",
            appId: "1:551223275238:web:3d883e1e3ca2473d02d527",
            measurementId: "G-S25F8L72DH"
        };

        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        const auth = getAuth(app);

        let currentPage = "departments";
    
        const studentData = {
            "CSE": {
                "1st Year": [
                    { id: "821023104001", name: "John Doe" },
                    { id: "821023104002", name: "Jane Smith" }
                ],
                "2nd Year": [
                { id: "821023104001", name: "Abin Raj A" },
                { id: "821023104002", name: "Akalya D" },
                { id: "821023104003", name: "Anandhan V" },
                { id: "821023104004", name: "Anisha A" },
                { id: "821023104005", name: "Arjunan S" },
                { id: "821023104006", name: "Ashwin R" },
                { id: "821023104007", name: "Ayyappan M" },
                { id: "821023104008", name: "Balamurugan K" },
                { id: "821023104009", name: "Baranidharan S" },
                { id: "821023104010", name: "Hariharan D" },
                { id: "821023104011", name: "Jaya Kumar S" },
                { id: "821023104012", name: "Kamalesh K" },
                { id: "821023104013", name: "Karthika M" },
                { id: "821023104014", name: "Kiruthika B" },
                { id: "821023104015", name: "Lingam K" },
                { id: "821023104016", name: "Malavika T" },
                { id: "821023104017", name: "Manikannan K" },
                { id: "821023104018", name: "Meeravathi S" },
                { id: "821023104019", name: "Mohamed Jiyavudeen S" },
                { id: "821023104020", name: "Monika P" },
                { id: "821023104021", name: "Mullaivanan S" },
                { id: "821023104022", name: "Prabhu K" },
                { id: "821023104023", name: "Prakash T" },
                { id: "821023104024", name: "Prem S" },
                { id: "821023104025", name: "Rafeek Ahamed A" },
                { id: "821023104026", name: "Raiyan M" },
                { id: "821023104027", name: "Rashya G" },
                { id: "821023104028", name: "Sabari Nathan S" },
                { id: "821023104029", name: "Sandhiya R" },
                { id: "821023104030", name: "Santhosh C" },
                { id: "821023104031", name: "Santhosh M" },
                { id: "821023104032", name: "Santhoshkumar U" },
                { id: "821023104033", name: "Saranya M" },
                { id: "821023104034", name: "Shalini V" },
                { id: "821023104035", name: "Sindhuja D" },
                { id: "821023104036", name: "Sivanesan M" },
                { id: "821023104037", name: "Sriraam J" },
                { id: "821023104038", name: "Stalin P" },
                { id: "821023104039", name: "Surya R" },
                { id: "821023104040", name: "Swathy V" },
                { id: "821023104041", name: "Swetha S" },
                { id: "821023104042", name: "Tamilselvan R" },
                { id: "821023104043", name: "Vijay Amalan S" },
                { id: "821023104044", name: "Vijithnikson R" },
                { id: "821023104302", name: "Niyas Ahamed M" },
                { id: "821023104303", name: "Sanjay D" },
                { id: "821023104304", name: "Santhosh M" },
                { id: "821023104305", name: "Sindhumathi S" },
                { id: "821023104306", name: "Swetha T" },
                { id: "821023104301", name: "Manoj B" }
        
            
                    // Add more students
                ]
            },
            "ECE": {
                "1st Year": [
                    { id: "821023204001", name: "Kavya R" },
                    { id: "821023204002", name: "Vinoth V" }
                ],
                "2nd Year": [
                    { id: "821023204001", name: "Gokul K" },
                    { id: "821023204002", name: "Shalini A" }
                ]
            },
            "AI & DS": {
                "1st Year": [
                    { id: "821023305001", name: "Dinesh P" },
                    { id: "821023305002", name: "Ananya R" }
                ],
                "2nd Year": [
                    { id: "821023305001", name: "Harini R" },
                    { id: "821023305002", name: "Sriram V" }
                ]
            },
            "AI & ML": {
                "1st Year": [
                    { id: "821023406001", name: "Rajesh N" },
                    { id: "821023406002", name: "Vidhya K" }
                ],
                "2nd Year": [
                    { id: "821023406001", name: "Krishna M" },
                    { id: "821023406002", name: "Tanya P" }
                ]
            }
        };

        // Check for teacher role before accessing the dashboard
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const uid = user.uid;
                const userDocRef = doc(db, "users", uid);
                const docSnap = await getDoc(userDocRef);

                if (docSnap.exists() && docSnap.data().role !== 'teacher') {
                    alert('You are not authorized to access the teacher dashboard.');
                    window.location.href = 'login.html'; // Redirect to login if not a teacher
                } else {
                    showDepartments();
                }
            } else {
                window.location.href = 'login.html'; // Redirect to login if not logged in
            }
        });

        window.showDepartments = function showDepartments() {
            currentPage = "departments";
            document.getElementById("department-section").style.display = "block";
            document.getElementById("year-section").style.display = "none";
            document.getElementById("attendance-section").style.display = "none";
        };

        window.loadYears = function loadYears(department) {
            currentPage = "years";
            document.getElementById("department-section").style.display = "none";
            document.getElementById("year-section").style.display = "block";
            document.getElementById("attendance-section").style.display = "none";
        
            document.getElementById("selected-department").innerText = department;
        };
        
        window.loadAttendance = function loadAttendance(year) {
            currentPage = "attendance";
            const department = document.getElementById("selected-department").innerText;
        
            document.getElementById("department-section").style.display = "none";
            document.getElementById("year-section").style.display = "none";
            document.getElementById("attendance-section").style.display = "block";
        
            document.getElementById("selected-year").innerText = year;
        
            const students = studentData[department][year];
            let studentRows = '';
            students.forEach((student, index) => {
                studentRows += `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${student.name} - ${student.id}</td>
                        <td><button class="btn" onclick="toggleAttendance(this)">Present</button></td>
                    </tr>
                `;
            });
            document.getElementById("student-list").innerHTML = studentRows;
        };

        window.toggleAttendance = function toggleAttendance(button) {
            if (button.textContent === "Present") {
                button.textContent = "Absent";
                button.style.backgroundColor = "red";
            } else {
                button.textContent = "Present";
                button.style.backgroundColor = "green";
            }
        };

        window.submitAttendance = async function submitAttendance() {
            const department = document.getElementById("selected-department").innerText;
            const year = document.getElementById("selected-year").innerText;
            const date = new Date().toISOString(); // Store the full date and time
            
            const attendance = {};
            const rows = document.querySelectorAll('#student-list tr');
            
            rows.forEach((row) => {
                const studentId = row.cells[1].innerText.split(" - ")[1];
                const status = row.cells[2].querySelector("button").textContent;
                attendance[studentId] = {
                    status: status
                };
            });

            try {
                await setDoc(doc(db, "attendance", department, year, date), {
                    attendance: attendance,
                    date: Timestamp.fromDate(new Date())
                });
                alert("Attendance Submitted!");
                showDepartments();
            } catch (error) {
                console.error("Error submitting attendance:", error);
                alert("There was an error submitting the attendance.");
            }
        };

        window.logout = function logout() {
            signOut(auth).then(() => {
                alert("Logged Out!");
                window.location.href = 'login.html'; // Redirect to login page
            }).catch((error) => {
                console.error("Error logging out:", error);
            });
        };



        window.submitAttendance = async function submitAttendance() {
            const department = document.getElementById("selected-department").innerText;
            const year = document.getElementById("selected-year").innerText;
            const date = new Date().toISOString().split('T')[0];  // Format date as YYYY-MM-DD
            
            const attendance = {};
            const rows = document.querySelectorAll('#student-list tr');
            
            rows.forEach((row) => {
                const studentId = row.cells[1].innerText.split(" - ")[1];
                const studentName = row.cells[1].innerText.split(" - ")[0];
                const status = row.cells[2].querySelector("button").textContent;
                attendance[studentId] = {
                    name: studentName,  // Store student name
                    status: status,
                    studentId: studentId
                };
            });
        
            try {
                const departmentRef = doc(db, "attendance", department, year, date);
                
                // Set attendance data in the Firestore document in the requested format
                await setDoc(departmentRef, {
                    [date]: attendance
                }, { merge: true });  // Use merge to avoid overwriting existing data
                
                alert("Attendance Submitted!");
                showDepartments();
            } catch (error) {
                console.error("Error submitting attendance:", error);
                alert("There was an error submitting the attendance. Check the console for details.");
            }
        };
