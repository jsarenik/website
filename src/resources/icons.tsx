import { colors } from "../styles/variables";


export const defaulStyle:React.CSSProperties = {
    fill: 'none',
    stroke: colors.brand,
    filter: `drop-shadow( 0 0 1px ${colors.brand})`,
}

function merge(style?: React.CSSProperties) {
    return {
        ... defaulStyle,
        ... style
    }
}

export function arrow(style?: React.CSSProperties) {
    return <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 100 100" style={merge(style)}>
        <path d="M75.3,33.7C87,49.8,85.6,72.5,71.1,87c-16,16-42,16-58.1,0c-16-16-16-42,0-58.1C27.5,14.4,50.2,13,66.3,24.7" />
        <path d="M67.2,41.9c7.4,11.5,6.1,27-4,37.1C51.5,90.6,32.6,90.6,21,79C9.4,67.4,9.4,48.5,21,36.9 c10.1-10.1,25.6-11.4,37.1-4" />
        <path d="M58.9,50.2C62,57,60.8,65.4,55.2,71c-7.2,7.2-18.9,7.2-26.2,0c-7.2-7.2-7.2-18.9,0-26.2 c5.6-5.6,14-6.9,20.9-3.7" />
        <path d="M49,60.1c-0.3,1.1-0.9,2.1-1.8,3c-2.8,2.8-7.4,2.8-10.2,0c-2.8-2.8-2.8-7.4,0-10.2c0.9-0.9,1.9-1.5,3-1.8" />
        <line x1="42.6" y1="57.6" x2="93.9" y2="6.2" />
        <polyline points="76.5,25.7 86.9,29 99,16.9 88.6,13.6 " />
        <polyline points="74.6,23.8 71.4,13.5 83.5,1.4 86.7,11.7 " />
    </svg>;
}

export function bag(style?: React.CSSProperties) {
    return <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 100 100" style={merge(style)}>
        <path d="M94.2,58.6v37.1c0,1.8-1.5,3.3-3.3,3.3H9.1c-1.8,0-3.3-1.5-3.3-3.3V59.2" />
        <path d="M35.2,26.8v-9.4c0-3,2.4-5.4,5.4-5.4h18.9c3,0,5.4,2.5,5.4,5.4v9.4" />
        <path d="M40.9,66C27.2,65.3,13.3,62.5,1,56.5l0.1-26.2c0-1.8,1.5-3.3,3.3-3.3h91.3c1.8,0,3.3,1.5,3.3,3.3L99,55.8 C86.6,62.4,72.4,65.3,58.5,66" />
        <path d="M44.1,61.3h11.8c1,0,1.8,0.8,1.8,1.8v8.1c0,1-0.8,1.8-1.8,1.8H44.1c-1,0-1.8-0.8-1.8-1.8v-8.1 C42.3,62.1,43.1,61.3,44.1,61.3L44.1,61.3z" />
    </svg>;
}

export function heart(style?: React.CSSProperties) {
    return <svg version="1.1" id="Layer_1" x="0px" y="0px"
        viewBox="0 0 100 100" style={merge(style)}>
        <path d="M86.7,61.1l6.3-6.3c10.8-10.8,5.5-25.4-3.2-34.7c-2.9-3.1-6.1-5.8-9.5-7.7c-4.4-2.5-18.3-6.1-27.3,2.7 L34.1,33.9c-5.1,5.1,7.7,9.9,14.2,3.5l4.7-4.7c7-6.3,15.8,6.4,26.7-2.3" />
        <path d="M13.5,58.1l-6.3-6.2C-13.6,31,22.5-4.7,43.7,15.9l4.2,4.2" />
        <path d="M63,37.3l24.2,25.4c4.9,5.2-2.4,15-8.7,8.5L67.1,59.5" />
        <path d="M57.3,67.4l12.5,12.8c5,5.1,15.1-2.5,8.8-9L66.3,58.6" />
        <path d="M53.5,81.5l6.2,6.3c5,5.1,14.8-2.2,8.5-8.8" />
        <path d="M28.4,53l0.7,0.7c2.2,2.2,2.2,5.9,0,8.2l-8.6,8.6c-2.2,2.2-5.9,2.2-8.2,0l-0.7-0.7c-2.2-2.2-2.3-5.9,0-8.2	l8.6-8.6C22.4,50.7,26.1,50.7,28.4,53L28.4,53z M42.9,56.9l0.7,0.7c2.3,2.3,2.2,5.9,0,8.2L29.8,79.5c-2.2,2.2-5.9,2.2-8.2,0L21,78.8
        c-2.2-2.2-2.3-5.9,0-8.2l13.7-13.7C36.9,54.7,40.6,54.7,42.9,56.9L42.9,56.9z M48.5,69.7l0.7,0.7c2.3,2.3,2.2,5.9,0,8.2L39.7,88	c-2.2,2.2-5.9,2.2-8.2,0l-0.7-0.7c-2.2-2.2-2.3-5.9,0-8.2l9.4-9.4C42.5,67.5,46.2,67.5,48.5,69.7L48.5,69.7z M54.5,82l0.7,0.7 c2.2,2.2,2.2,5.9,0,8.2l-5.8,5.8c-2.2,2.2-5.9,2.2-8.2,0L40.6,96c-2.2-2.2-2.3-5.9,0-8.2l5.8-5.8C48.6,79.7,52.3,79.7,54.5,82 L54.5,82z" />
    </svg>;
}

export function lamp(style?: React.CSSProperties) {
    return <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 100 100" style={merge(style)}>
        <path  d="M33.7,74.8c-1.1-16.4-13.8-8.1-15.2-30.4c-0.9-14.1,12.2-25.5,27.2-25.5s28.2,11.5,27.2,25.5 c-1.4,19-10.8,15.2-14.3,25.1"/>
        <line  x1="34.1" y1="94.4" x2="58.6" y2="88"/>
        <line  x1="34.1" y1="85.1" x2="58.6" y2="78.7"/>
        <line  x1="34.1" y1="75.9" x2="58.6" y2="69.5"/>
        <path  d="M54.4,91.4c0,4.2-3.9,7.6-8.7,7.6c-3,0-5.7-1.4-7.3-3.4"/>
        <line  x1="46.4" y1="1" x2="46.4" y2="9.2"/>
        <line  x1="76.3" y1="12.4" x2="70.5" y2="18.2"/>
        <line  x1="89.9" y1="44.4" x2="81.6" y2="44.4"/>
        <line  x1="75.1" y1="75.1" x2="69.3" y2="69.3"/>
        <line  x1="16.1" y1="12.4" x2="21.9" y2="18.2"/>
        <line  x1="1.3" y1="42.7" x2="9.6" y2="42.7"/>
        <line  x1="14.9" y1="75.1" x2="20.7" y2="69.3"/>
        <polyline  points="35.8,48.7 44.7,61 58.2,37.3 "/>
    </svg>;
}

export function rocket(style?: React.CSSProperties) {
    return <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 100 100" style={merge(style)}>
        <path d="M44.1,74.8l-2.5,9.6c-0.5,1.7-3.3,1.3-4.6,0.1L16,64.4c-1.3-1.2-1.8-4.2-0.1-4.6l9.3-3.1 M35.5,65.5l-0.2-0.2
            L22.6,53.1c9.5-13.3,20.3-31.2,31.3-42.7C63.5,0.2,79.1-1.5,93.7,4.4l0.1,0.1c6.7,14.5,5.4,30.2-4.2,40.2
            c-11,11.5-28.4,23-41.4,33.1L35.5,65.5L35.5,65.5z M67.5,2.3C75.6,0,84.8,0.8,93.7,4.4l0.1,0.1c4.1,8.8,5.2,18.1,3.3,26.2L67.5,2.3
            L67.5,2.3z M71.2,28.1c3.2,3,3.3,8,0.2,11.2c-3,3.2-8,3.3-11.2,0.2c-3.2-3-3.3-8-0.2-11.2C63,25.2,68,25.1,71.2,28.1L71.2,28.1z
            M56.3,43.6c3.2,3,3.3,8,0.2,11.2c-3,3.2-8,3.3-11.2,0.2c-3.2-3-3.3-8-0.2-11.2C48.1,40.7,53.1,40.6,56.3,43.6L56.3,43.6z M22.7,53
            l17.7-25.8c-5.7-1.1-11.7-3.7-17.2-3.3C6,25.1,3.1,40.2,1.5,54.5L22.7,53L22.7,53z M48.3,77.6l25-18.8c1.3,5.7,4.2,11.5,4,17
            C76.9,93,62,96.6,47.8,98.8L48.3,77.6L48.3,77.6z M27.1,46.2L55,72.7"/>
    </svg>;
}

export function tick(style?: React.CSSProperties) {
    return <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 21.3 14.1" style={merge(style || {
                        fill: 'none',
                        stroke: colors.brand,
                        padding: '3px 3px  0 0 ',
                        height: 14,
                    })}>
        <path d="M0.6,7.9l5.8,4.9L20.6,0.8"/>
    </svg>;
}

export function cross(style?: React.CSSProperties) {
    return <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 14.4 14.4" style={merge(style || {
                        fill: 'none',
                        stroke: colors.fontColor3,
                        filter: `drop-shadow( 0 0 1px ${colors.fontColor3})`,
                        padding: '3px 3px  0 0 ',
                        height: 14,
                    })}>
        <g id="Group_14" transform="translate(-716.293 -2919.293)">
            <path d="M717,2920l13,13"/>
            <path d="M730,2920l-13,13"/>
        </g>
    </svg>;
}

export function burger(style?: React.CSSProperties) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="22.206" height="8.019" viewBox="0 0 22.206 8.019" style={merge(style || {
                        fill: 'none',
                        stroke: '#fff',
                        filter: `drop-shadow( 0 0 1px ${colors.fontColor3})`,
                        padding: '3px 3px  0 0 ',
                        height: 14,
                    })}>
        <g transform="translate(-325.5 -34.148)">
            <line x2="22.206" transform="translate(325.5 34.648)"/>
            <line x2="22.206" transform="translate(325.5 38.349)"/>
            <line x2="12.336" transform="translate(330.818 41.667)"/>
        </g>
    </svg>;
}
