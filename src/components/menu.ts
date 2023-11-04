import { Menu } from "@/types/app"
import { FunctionComponent } from "@/types/core"

type NavbarVariables = {
    menu: Array<Menu>
}

export const Navbar: FunctionComponent<NavbarVariables> = () => ({
    variables: {
        menu: [
            {
                label: 'Home',
                link: '/'
            },
            {
                label: 'google',
                link: 'http://google.com'
            }
        ]
    },
    init: () => null,
    render: function () {
        return `
            <nav>
                <ul>
                    ${this.variables.menu.map(item => `
                        <li>
                            <a href="${item.link}">${item.label}</a>
                        </li>
                    `)}
                </ul>
            </nav>
        `
    }
})