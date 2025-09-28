import re
import sys

# Define token specifications: (name, regex)
TOKEN_SPECIFICATION = [
    ('IF',       r'\bif\b'),
    ('ELSE',     r'\belse\b'),
    ('WHILE',    r'\bwhile\b'),
    ('RETURN',   r'\breturn\b'),
    ('INT_LIT',  r'\b\d+\b'),
    ('ID',       r'\b[A-Za-z_][A-Za-z0-9_]*\b'),
    ('EQ',       r'=='),
    ('LT',       r'<'),
    ('GT',       r'>'),
    ('ASSIGN',   r'='),
    ('PLUS',     r'\+'),
    ('MINUS',    r'-'),
    ('MUL',      r'\*'),
    ('DIV',      r'/'),
    ('SEMI',     r';'),
    ('LPAREN',   r'\('),
    ('RPAREN',   r'\)'),
    ('LBRACE',   r'\{'),     
    ('RBRACE',   r'\}'),     
    ('SKIP',     r'[ \t\n]+'),
    ('MISMATCH', r'.'),
]


# Compile combined regex
tok_regex = '|'.join('(?P<%s>%s)' % pair for pair in TOKEN_SPECIFICATION)
get_token = re.compile(tok_regex).match

def tokenize(code):
    """Yield (token_type, lexeme, position) for each match in code."""
    pos = 0
    match = get_token(code, pos)
    while match:
        typ = match.lastgroup
        lexeme = match.group(typ)
        if typ == 'SKIP':
            pass
        elif typ == 'MISMATCH':
            raise SyntaxError(f'Unexpected character {lexeme!r} at position {pos}')
        else:
            yield typ, lexeme, pos
        pos = match.end()
        match = get_token(code, pos)
    if pos != len(code):
        raise SyntaxError(f'Unexpected text at end: {code[pos:]}')

def main():
    if len(sys.argv) != 2:
        print(f'Usage: python {sys.argv[0]} <source_file>')
        sys.exit(1)
    with open(sys.argv[1], 'r') as f:
        code = f.read()
    for tok_type, lexeme, pos in tokenize(code):
        print(f'Token: {tok_type:<7} Lexeme: {lexeme}')

if __name__ == '__main__':
    main()
