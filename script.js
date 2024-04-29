function decodetext()
{
    let dec = document.getElementById("decode").value;
    let n = dec.length;
    let i;
    let de;

    document.getElementById("decoded").value = '';

    for(i=0; i<=n; i++)
    {
        if(dec[i] == 'A')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'K';
        }
        if(dec[i] == 'B')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'P';
        }
        if(dec[i] == 'C')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + '9';
        }
        if(dec[i] == 'D')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'i';
        }
        if(dec[i] == 'E')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'G';
        }
        if(dec[i] == 'F')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'S';
        }
        if(dec[i] == 'G')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + '?';
        }
        if(dec[i] == 'H')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'm';
        }
        if(dec[i] == 'I')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'C';
        }
        if(dec[i] == 'J')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + '1';
        }
        if(dec[i] == 'K')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 's';
        }
        if(dec[i] == 'L')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + '=';
        }
        if(dec[i] == 'M')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'a';
        }
        if(dec[i] == 'N')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'p';
        }
        if(dec[i] == 'O')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + '*';
        }
        if(dec[i] == 'P')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + '.';
        }
        if(dec[i] == 'Q')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + '2';
        }
        if(dec[i] == 'R')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'e';
        }
        if(dec[i] == 'S')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'j';
        }
        if(dec[i] == 'T')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'W';
        }
        if(dec[i] == 'U')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'L';
        }
        if(dec[i] == 'V')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'r';
        }
        if(dec[i] == 'W')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'x';
        }
        if(dec[i] == 'X')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + '5';
        }
        if(dec[i] == 'Y')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'l';
        }
        if(dec[i] == 'Z')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'v';
        }

        if(dec[i] == 'a')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'Q';
        }
        if(dec[i] == 'b')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + '4';
        }
        if(dec[i] == 'c')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'f';
        }
        if(dec[i] == 'd')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'A';
        }
        if(dec[i] == 'e')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'w';
        }
        if(dec[i] == 'f')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + '-';
        }
        if(dec[i] == 'g')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'Y';
        }
        if(dec[i] == 'h')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + '6';
        }
        if(dec[i] == 'i')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'n';
        }
        if(dec[i] == 'j')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + '/';
        }
        if(dec[i] == 'k')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'T';
        }
        if(dec[i] == 'l')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'h';
        }
        if(dec[i] == 'm')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + '3';
        }
        if(dec[i] == 'n')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 't';
        }
        if(dec[i] == 'o')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'U';
        }
        if(dec[i] == 'p')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'y';
        }
        if(dec[i] == 'q')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + '@';
        }
        if(dec[i] == 'r')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'z';
        }
        if(dec[i] == 's')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'B';
        }
        if(dec[i] == 't')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'H';
        }
        if(dec[i] == 'u')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'k';
        }
        if(dec[i] == 'v')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + '#';
        }
        if(dec[i] == 'w')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'q';
        }
        if(dec[i] == 'x')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'g';
        }
        if(dec[i] == 'y')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'u';
        }
        if(dec[i] == 'z')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'o';
        }

        if(dec[i] == '1')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'J';
        }
        if(dec[i] == '2')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + '!';
        }
        if(dec[i] == '3')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'F';
        }
        if(dec[i] == '4')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'R';
        }
        if(dec[i] == '5')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + '+';
        }
        if(dec[i] == '6')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'c';
        }
        if(dec[i] == '7')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'M';
        }
        if(dec[i] == '8')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'D';
        }
        if(dec[i] == '9')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'O';
        }
        if(dec[i] == '0')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'I';
        }
        if(dec[i] == '@')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'b';
        }
        if(dec[i] == '#')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + '7';
        }
        if(dec[i] == '!')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'V';
        }
        if(dec[i] == '?')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'X';
        }
        if(dec[i] == '.')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + '0';
        }
        if(dec[i] == '+')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'd';
        }
        if(dec[i] == '-')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'N';
        }
        if(dec[i] == '*')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + '8';
        }
        if(dec[i] == '/')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'Z';
        }
        if(dec[i] == '=')
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + 'E';
        }

        if(dec[i] == " ")
        {
            document.getElementById("decoded").value = document.getElementById("decoded").value + " ";
        }
    }

    for(i=0; i<=n; i++)
    {
        document.getElementById("decoded").value = de[i];
    }

}

function encodetext()
{
    let enc = document.getElementById("encode").value;
    let n = enc.length;
    let i;
    let en;

    document.getElementById("encoded").value = '';

    for(i=0; i<=n; i++)
    {
        if(enc[i] == 'A')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'd';
        }
        if(enc[i] == 'B')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 's';
        }
        if(enc[i] == 'C')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'I';
        }
        if(enc[i] == 'D')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + '8';
        }
        if(enc[i] == 'E')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + '=';
        }
        if(enc[i] == 'F')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + '3';
        }
        if(enc[i] == 'G')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'x';
        }
        if(enc[i] == 'H')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 't';
        }
        if(enc[i] == 'I')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + '0';
        }
        if(enc[i] == 'J')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + '1';
        }
        if(enc[i] == 'K')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'A';
        }
        if(enc[i] == 'L')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'U';
        }
        if(enc[i] == 'M')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + '7';
        }
        if(enc[i] == 'N')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + '-';
        }
        if(enc[i] == 'O')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + '9';
        }
        if(enc[i] == 'P')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'B';
        }
        if(enc[i] == 'Q')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'a';
        }
        if(enc[i] == 'R')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + '4';
        }
        if(enc[i] == 'S')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'F';
        }
        if(enc[i] == 'T')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'k';
        }
        if(enc[i] == 'U')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'o';
        }
        if(enc[i] == 'V')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + '!';
        }
        if(enc[i] == 'W')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'T';
        }
        if(enc[i] == 'X')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + '?';
        }
        if(enc[i] == 'Y')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'g';
        }
        if(enc[i] == 'Z')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + '/';
        }



        if(enc[i] == 'a')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'M';
        }
        if(enc[i] == 'b')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + '@';
        }
        if(enc[i] == 'c')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + '6';
        }
        if(enc[i] == 'd')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + '+';
        }
        if(enc[i] == 'e')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'R';
        }
        if(enc[i] == 'f')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'c';
        }
        if(enc[i] == 'g')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'x';
        }
        if(enc[i] == 'h')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'l';
        }
        if(enc[i] == 'i')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + '2';
        }
        if(enc[i] == 'j')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'S';
        }
        if(enc[i] == 'k')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'u';
        }
        if(enc[i] == 'l')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'Y';
        }
        if(enc[i] == 'm')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'H';
        }
        if(enc[i] == 'n')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'i';
        }
        if(enc[i] == 'o')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'z';
        }
        if(enc[i] == 'p')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'N';
        }
        if(enc[i] == 'q')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'w';
        }
        if(enc[i] == 'r')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'V';
        }
        if(enc[i] == 's')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'K';
        }
        if(enc[i] == 't')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'n';
        }
        if(enc[i] == 'u')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'y';
        }
        if(enc[i] == 'v')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'Z';
        }
        if(enc[i] == 'w')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'e';
        }
        if(enc[i] == 'x')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'W';
        }
        if(enc[i] == 'y')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'p';
        }
        if(enc[i] == 'z')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'r';
        }
        if(enc[i] == '1')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'J';
        }
        if(enc[i] == '2')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'Q';
        }
        if(enc[i] == '3')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'm';
        }
        if(enc[i] == '4')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'b';
        }
        if(enc[i] == '5')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'X';
        }
        if(enc[i] == '6')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'h';
        }
        if(enc[i] == '7')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + '#';
        }
        if(enc[i] == '8')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + '*';
        }
        if(enc[i] == '9')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'C';
        }
        if(enc[i] == '0')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + '.';
        }
        if(enc[i] == '@')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'q';
        }
        if(enc[i] == '#')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'v';
        }
        if(enc[i] == '!')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + '2';
        }
        if(enc[i] == '?')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'G';
        }
        if(enc[i] == '.')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'P';
        }
        if(enc[i] == '+')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + '5';
        }
        if(enc[i] == '-')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'f';
        }
        if(enc[i] == '*')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'O';
        }
        if(enc[i] == '/')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'j';
        }
        if(enc[i] == '=')
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + 'L';
        }

        if(enc[i] == " ")
        {
            document.getElementById("encoded").value = document.getElementById("encoded").value + " ";
        }
    }
}
