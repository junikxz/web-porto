// render.js - Populates the static HTML with data from portfolioData

document.addEventListener('DOMContentLoaded', () => {
    // 1. Set Basic Info
    document.title = `${portfolioData.name} - Portfolio`;
    document.querySelector('.nav-logo').textContent = portfolioData.name;
    document.querySelector('#hero h1').textContent = `${portfolioData.name}.`;
    document.querySelector('#hero .subtitle').textContent = portfolioData.title;
    document.querySelector('#hero-summary').textContent = portfolioData.summary;
    
    // Set About Me (Handling line breaks)
    const aboutContent = portfolioData.about_me.split('\n').filter(p => p.trim() !== '');
    const aboutContainer = document.querySelector('.about-text');
    
    // Clear existing p tag in HTML and replace with multiple p tags if needed
    const existingPElement = aboutContainer.querySelector('p');
    if (existingPElement) {
       existingPElement.remove();
    }
    
    // Insert new parsed paragraphs
    aboutContent.forEach(text => {
        const p = document.createElement('p');
        p.textContent = text;
        aboutContainer.insertBefore(p, aboutContainer.querySelector('blockquote'));
    });
    
    document.querySelector('.about-text blockquote em').textContent = `"${portfolioData.quote}"`;

    // 2. Set Social Links
    document.querySelectorAll('[aria-label="GitHub"]').forEach(el => el.href = portfolioData.social.github);
    document.querySelectorAll('[aria-label="LinkedIn"]').forEach(el => el.href = portfolioData.social.linkedin);
    const emailLinks = document.querySelectorAll(`[href^="mailto:"], [aria-label="Email"]`);
    emailLinks.forEach(el => el.href = `mailto:${portfolioData.social.email}`);

    // Footer Year
    document.querySelector('footer p').innerHTML = `&copy; ${portfolioData.current_year} - Designed & Built by ${portfolioData.name}`;

    // 3. Populate Skills
    const skillsGrid = document.querySelector('.skills-grid');
    skillsGrid.innerHTML = ''; // Clear existing
    portfolioData.skills.forEach(skill => {
        const div = document.createElement('div');
        div.className = 'skill-tag';
        div.textContent = skill;
        skillsGrid.appendChild(div);
    });

    // 4. Populate Experiences
    const experienceList = document.querySelector('.experience-list');
    experienceList.innerHTML = '';
    portfolioData.experiences.forEach(exp => {
        const card = document.createElement('div');
        card.className = 'experience-card clickable-card';
        card.setAttribute('data-type', 'experience');
        card.setAttribute('data-title', exp.role);
        card.setAttribute('data-subtitle', `${exp.company} • ${exp.duration}`);
        card.setAttribute('data-description', exp.full_description || exp.description);
        card.setAttribute('data-logo', exp.logo);

        card.innerHTML = `
            <div class="experience-logo">
                <img src="${exp.logo}" alt="${exp.company} Logo">
            </div>
            <div class="experience-details">
                <h3>${exp.role}</h3>
                <p class="company-duration">${exp.company} • ${exp.duration}</p>
                <p>${exp.description}</p>
            </div>
        `;
        experienceList.appendChild(card);
    });

    // 5. Populate Projects
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = '';
    portfolioData.projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card clickable-card';
        card.setAttribute('data-type', 'project');
        card.setAttribute('data-title', project.title);
        card.setAttribute('data-description', project.description);
        card.setAttribute('data-full-description', project.full_description || project.description);
        card.setAttribute('data-tech', project.tech_stack.join(','));
        card.setAttribute('data-github', project.github_url || '');
        card.setAttribute('data-live', project.live_url || '');
        if (project.image_url) {
             card.setAttribute('data-image', project.image_url);
        }

        let imageHtml = '';
        if (project.image_url) {
            imageHtml = `
            <div class="project-image">
                <img src="${project.image_url}" alt="${project.title} preview">
            </div>`;
        }
        
        let techTagsHtml = project.tech_stack.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
        
        let linksHtml = '';
        if (project.github_url && project.github_url !== '#') {
            linksHtml += `<a href="${project.github_url}" target="_blank" class="project-link-btn" onclick="event.stopPropagation();"><i class="fab fa-github"></i> GitHub</a> `;
        }
        if (project.live_url) {
            linksHtml += `<a href="${project.live_url}" target="_blank" class="project-link-btn" onclick="event.stopPropagation();"><i class="fas fa-external-link-alt"></i> Live Demo</a>`;
        }

        card.innerHTML = `
            ${imageHtml}
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
            <div class="project-tech-tags">
                ${techTagsHtml}
            </div>
            <div class="project-links">
                ${linksHtml}
            </div>
        `;
        projectsGrid.appendChild(card);
    });

    // 6. Re-attach Modal & Toggle Logic (migrated from old script tag)
    initInteractiveLogic();
});

function initInteractiveLogic() {
    // === Modal Logic ===
    const modal = document.getElementById('detail-modal');
    const closeModalBtn = document.querySelector('.modal-close');
    
    if (modal && closeModalBtn) {
        const modalImage = document.getElementById('modal-image');
        const modalHeader = document.querySelector('.modal-header');
        const modalIcon = document.getElementById('modal-icon');
        const modalTitleIcon = document.getElementById('modal-title-icon');
        const modalSubtitle = document.getElementById('modal-subtitle');
        const modalTitleText = document.getElementById('modal-title-text');
        const modalDescription = document.getElementById('modal-description');
        const modalTechContainer = document.getElementById('modal-tech-container');
        const modalTechTags = document.getElementById('modal-tech-tags');
        const modalLinks = document.getElementById('modal-links');
        const modalGithubLink = document.getElementById('modal-github');
        const modalLiveLink = document.getElementById('modal-live');

        function closeModal() {
            modal.style.display = 'none';
        }
        
        closeModalBtn.addEventListener('click', closeModal);
        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                closeModal();
            }
        });

        function resetModal() {
            modalImage.style.display = 'none';
            modalHeader.style.display = 'none';
            modalTitleText.style.display = 'none';
            modalTechContainer.style.display = 'none';
            modalLinks.style.display = 'none';
            modalDescription.textContent = '';
        }

        // Project/Experience Clicks
        const allClickableCards = document.querySelectorAll('.clickable-card');
        allClickableCards.forEach(card => {
            card.addEventListener('click', () => {
                const type = card.getAttribute('data-type');
                resetModal(); 

                if (type === 'project') {
                    const title = card.getAttribute('data-title');
                    const description = card.getAttribute('data-full-description'); 
                    const tech = card.getAttribute('data-tech'); 
                    const githubUrl = card.getAttribute('data-github');
                    const liveUrl = card.getAttribute('data-live');
                    const imageUrl = card.getAttribute('data-image');

                    if (imageUrl) {
                        modalImage.src = imageUrl;
                        modalImage.style.display = 'block';
                    }
                    modalTitleText.textContent = title;
                    modalTitleText.style.display = 'block';
                    
                    modalDescription.innerHTML = description.replace(/\n/g, '<br>');

                    if (tech) {
                        modalTechContainer.style.display = 'block';
                        modalTechTags.innerHTML = '';
                        tech.split(',').forEach(tag => {
                            if (tag.trim()) {
                                const tagElement = document.createElement('div');
                                tagElement.className = 'skill-tag';
                                tagElement.textContent = tag.trim();
                                modalTechTags.appendChild(tagElement);
                            }
                        });
                    }

                    if(githubUrl || liveUrl) {
                        modalLinks.style.display = 'flex';
                        // hide placeholder # links
                        const isRealGithub = githubUrl && githubUrl !== '#';
                        modalGithubLink.style.display = isRealGithub ? 'inline-block' : 'none';
                        if(isRealGithub) modalGithubLink.href = githubUrl;
                        
                        modalLiveLink.style.display = liveUrl ? 'inline-block' : 'none';
                        if(liveUrl) modalLiveLink.href = liveUrl;
                    }

                } else if (type === 'experience') {
                    const title = card.getAttribute('data-title');
                    const subtitle = card.getAttribute('data-subtitle');
                    const description = card.getAttribute('data-description');
                    const logo = card.getAttribute('data-logo');

                    modalHeader.style.display = 'flex';
                    modalIcon.src = logo;
                    modalTitleIcon.textContent = title;
                    modalSubtitle.textContent = subtitle;
                    modalDescription.innerHTML = description.replace(/\n/g, '<br>');
                }
                
                modal.style.display = 'block';
            });
        });
    }

    // === Show More/Less Logic ===
    const toggleBtn = document.getElementById('toggle-projects-btn');
    const projectsGrid = document.querySelector('.projects-grid');
    if (toggleBtn && projectsGrid) {
        const allProjects = projectsGrid.querySelectorAll('.project-card');
        const projectsToShow = 4;
        let isShowingAll = false;

        function toggleProjects() {
            for (let i = projectsToShow; i < allProjects.length; i++) {
                if (isShowingAll) {
                    allProjects[i].classList.remove('is-hidden');
                } else {
                    allProjects[i].classList.add('is-hidden');
                }
            }
        }

        toggleProjects(); 

        if (allProjects.length <= projectsToShow) {
            toggleBtn.parentElement.style.display = 'none';
        }

        toggleBtn.addEventListener('click', () => {
            isShowingAll = !isShowingAll; 
            toggleProjects(); 
            toggleBtn.textContent = isShowingAll ? 'Tampilkan Lebih Sedikit' : 'Tampilkan Lebih Banyak';
        });
    }
}
