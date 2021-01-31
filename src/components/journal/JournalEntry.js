import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div
              className="journal__entry-picture"
              style={{
                  backgroundSize: 'cover',
                  backgroundImage: 'url(https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/09/dragon-ball-kame-house-mutenroshi-existe-mundo-real-2061839.jpg)'
              }}
            >
            </div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo dia
                </p>
                <p className="journal__entry-p">
                  texto  textotexto texto vtextotextotextotextotexto textoasd
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
