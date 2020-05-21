// alias components to make my pages easier to write;
// I have to change the color of individual words
// in many, many sentences, and it's super tedious to
// write <span className="dhsdhg"> over and over again


export const Adj = (props) => {
  return <span style={{ color: 'var(--adj)' }}>{props.x}</span>
}

export const Adv = (props) => {
  return <span style={{ color: 'var(--adv)' }}>{props.x}</span>
}

export const Noun = (props) => {
  return <span style={{ color: 'var(--noun)' }}>{props.x}</span>
}

export const Verb = (props) => {
  return <span style={{ color: 'var(--verb)' }}>{props.x}</span>
}

export const Pron = (props) => {
  return <span style={{ color: 'var(--pron)' }}>{props.x}</span>
}

export const Prep = (props) => {
  return <span style={{ color: 'var(--prep)' }}>{props.x}</span>
}

export const Conj = (props) => {
  return <span style={{ color: 'var(--conj)' }}>{props.x}</span>
}

export const Intrj = (props) => {
  return <span style={{ color: 'var(--intrj)' }}>{props.x}</span>
}

export const Punc = (props) => {
  return <span style={{ color: 'var(--punc)' }}>{props.x}</span>
}