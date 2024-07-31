import React from 'react'
import { Link } from 'react-scroll'
import { FaGraduationCap, FaUserAlt, FaPhoneAlt, FaBriefcase, FaCode } from 'react-icons/fa'
import '../Main.css'
const Sidebar = () => {

    const styles = { fontSize: "20px" }

    return (
        <nav>
            <ul className='sidebar'>

                <Link to='about' style={{ cursor: "pointer" }}>
                    <p>
                        <FaUserAlt style={styles} />
                        <small>About</small>
                    </p>
                </Link>
                <Link to='education' style={{ cursor: "pointer" }}>
                    <FaGraduationCap style={styles} />
                    <small>Edu</small>
                </Link>
                <Link to='skills' style={{ cursor: "pointer" }}>
                    <FaCode style={styles} />
                    <small>Skills</small>
                </Link>
                <Link to='projects' style={{ cursor: "pointer" }}>
                    <FaBriefcase style={styles} />
                    <small>Projects</small>
                </Link>
                <Link to='contact' style={{ cursor: "pointer" }}>
                    <FaPhoneAlt style={styles} />
                    <small>Contact</small>
                </Link>





            </ul>
        </nav>
    )
}

export default Sidebar