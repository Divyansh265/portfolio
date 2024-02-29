import React, { useEffect, useState } from 'react'
import { ProjectsData } from './ProjectsData'
import { projectsNav } from './ProjectsData'
import WorkItems from './WorkItems'
function Works() {
    const [item, setItem] = useState({ name: "All" })
    const [projects, setProjects] = useState([])
    const [active, setActive] = useState(0)

    useEffect(() => {
        if (item.name === "All") {
            setProjects(ProjectsData)
        }
        else {
            const newProjects = ProjectsData.filter((project) => {
                return project.category == item.name
            })
            setProjects(newProjects)
        }
    }, [item])
    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent })
        setActive(index)
    }
    return (
        <div>
            <div className='work__filters'>
                {
                    projectsNav.map((item, index) => {
                        return <span onClick={(e) => {
                            handleClick(e, index)
                        }} key={index} className={`${active === index ? 'active-work' : ""} work__item`}>{item.name}</span>
                    })
                }
            </div>
            <div className='work__container container grid'>
                {
                    projects.map((item) => {
                        return <WorkItems item={item} key={item.id} />
                    })
                }
            </div>
        </div>
    )
}

export default Works
