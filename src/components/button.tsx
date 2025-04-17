interface BotaoProps {
  children: React.ReactNode;
  onClick?: () => void;
  tipo?: 'button' | 'submit' | 'reset';
}

export const Botao = ({ children, onClick, tipo = 'button' }: BotaoProps) => {
  return (
    <button className="botao" onClick={onClick} type={tipo}>
      {children}
    </button>
  );
}
