export function AboutTeam() {
    const members = [{ name: 'Luchy', img: 'assets/imgs/luchy.jpg', position: 'Security' }, { name: 'Peter', img: 'assets/imgs/peter.jpg', position: 'Purring' }]
    return <div>
        <ul className="team clean-list">
            { members.map(member => <li className="grid" key={member.name}>
                <h2>{ member.name }</h2>
                <h4>Position: { member.position }</h4>
                <img src={ member.img } alt="" />
            </li>) }
        </ul>
    </div>
}