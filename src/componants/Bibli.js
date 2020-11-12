
import React from 'react';

export default function Bibli() {
    return (
      <List />
    );
  }

class List extends React.Component {


    state = {
        p_persos : [
            {
                id: 1, 
                nom_projet: "", 
                img: null,
                contain: "test projet perso 1",
                lien: null,
            },
            {
                id: 2, 
                nom_projet: "", 
                img: null,
                contain: "test projet perso 2",
                lien: null,
            },

        ],
        p_epitechs : [
            {
                id: 1, 
                nom_projet: "", 
                img: null,
                contain: "test projet epitech 1",
                lien: null,
            },
            {
                id: 2, 
                nom_projet: "",
                img: null, 
                contain: "test projet epitech 2",
                lien: null,
            },
        ],
        p_pros : [
            {
                id: 1, 
                nom_projet: "", 
                img: null,
                contain: "test projet pro 1",
                lien: null,
            },
            {
                id: 2, 
                nom_projet: "", 
                img: null,
                contain: "test projet pro 2",
                lien: null,
            },
        ]
    }
    render() {
        const pPerso = this.state.p_persos
        // const pEpitech = this.state.p_epitechs
        // const pPro = this.state.p_pros

        return (
            <div>
                <ul>
                    <li>
                        {pPerso[0].contain}
                    </li>
                    <li>
                        {pPerso[1].contain}
                    </li>
                </ul>
            </div>

        );
    }

}
