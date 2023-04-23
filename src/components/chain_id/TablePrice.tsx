import style from "../../styles/Chain.module.css"

export default function TablePrice({data}: {data: {
    Standart: {
        gwei: number,
        usd: number
      },
      Fast: {
        gwei: number,
        usd: number
      },
      Rapid: {
        gwei: number,
        usd: number
      }
}}){
    return(<>
            <div className={style.table}>
                <div >
                            <h3 className={style.red}>Standart</h3>
                            <span>(30-60 secs)</span>
                            <p>{(data.Standart.usd * 10000).toFixed(0)} /10K USD</p>
                            <p>{(data.Standart.gwei / 1000 ).toFixed(0)} K GWEI</p>
                        </div>
                        <div>
                            <h3 className={style.green}>Fast</h3>
                            <span>(30-60 secs)</span>
                            <p>{(data.Standart.usd * 10000).toFixed(0)} /10K USD</p>
                            <p>{(data.Standart.gwei / 1000 ).toFixed(0)} K GWEI</p>
                        </div>
                        <div>
                            <h3 className={style.purple}>Rapid</h3>
                            <span>(30-60 secs)</span>
                            <p>{(data.Standart.usd * 10000).toFixed(0)} /10K USD</p>
                            <p>{(data.Standart.gwei / 1000 ).toFixed(0)} K GWEI</p>
                        </div>
            </div>
                   
    </>)
}