import sublinks from './data.js'

const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const modal = document.querySelector('#modal')
const modalContent = document.querySelector('.modal-content')
const linkBtns = [...document.querySelectorAll('.link-btn')]
const submenu = document.querySelector('.submenu')
const submenuCenter = document.querySelector('.submenu-center')

function displaySubmenu() {
    submenuCenter.innerHTML = sublinks.map(item => {
        const {
            page,
            links
        } = item;
        return `
            <div class="hidden"">
                <h1 class = "text-txt-clr-0">${page}</h1>
                <div class = "submenu-content" >
                    ${links.map(link => {
                        return `
                            <a href=${link.url} target="_blank">
                                <i class="${link.icon}"></i>
                                <p>${link.label}</p>
                            </a>
                        `
                    }).join('')}
                </div>
            </div>
        `
    }).join('')
}

linkBtns.forEach(linkBtn => {
    linkBtn.addEventListener('mouseover', e => {
        submenu.classList.remove('hidden')
        const rect = e.target.getBoundingClientRect()
        const top = rect.top * 3.5
        const x = rect.x - (rect.width - top)
        submenu.style.top = `${top}px`;
        submenu.style.left = `${x}px`
        displaySubmenu()
        const getItem = submenuCenter.children.item(e.target.dataset.id - 1)
        getItem.classList.remove('hidden')
        setTimeout(() => {
            submenu.classList.add('hidden')
            getItem.classList.add('hidden')
            submenu.style = null;
            clearTimeout(() => {
                submenu.classList.remove('hidden')
            })
        }, 5000);
    })
})

openBtn.addEventListener('click', () => {
    modal.classList.remove('hide')
    modal.classList.add('opa')
})

closeBtn.addEventListener('click', () => {
    modal.classList.add('hide')
    modal.classList.remove('opa')
})

modalContent.innerHTML = sublinks.map(item => {
    const {
        links,
        page
    } = item
    return `
    <div>
        <h1>${page}</h1>
        <div class="sub-modal text-bg-clr-0">
            ${links.map(link => {
                return `
                    <a href="${link.url}" target="_blank">
                        <i class="${link.icon}"></i>
                        <p>${link.label}</p>
                    </a>
                `
            }).join('')}
        </div>
    </div>
    `
}).join('')