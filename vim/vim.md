Vim Basic Commands

### Basic Commands

## :wq Write and Command

3 modes : insert mode / command mode(:) / visual mode(esc)

## x : remove character(normal delete key)

## d

- dd : delete the entire line
- dw : delete the one word
- db : delete the one word backward

## etc

- o : write mode with enter key
- u : undo(targeted specific time not single commands)
- ':set number' : setting number in front of each written line
- ':{number}' : move to specific line
- :!{shellcommand} : run shell command

-iI(capital)aA : editing in line
-capital I : editing mode in beginning
-i : editing mode in current cursor
-a : editing mode after current cursor
-A : editing mode in end of the line

-xr : making changes while in command

-{} : move cursor by paragraph

- Ctrl + v : setting multiple cursor
- Shift + I : multiple cursor insert mode

### Apply Tips

- As a regular Vim user, the key thing about Vim is that it doesn't have what you consider "keybinds", it has a dialect where you tell Vim what you want to do. All the keys involved are words to build a sentence telling Vim what you want to do. Don't memorize the complex commands, memorize the keywords in the dialect and you should have an easier time in Vim.

* d3w : Delete 3 word(s)
* y3w : Yank/Copy 3 word(s)
* 3p : Put/Paste 3 (times)
* dt" : Delete To "
* 3j : 3 lines down
* di" : Delete inside "..."
* dG : delete to the bottom of the file

- Final suggestion, don't copy someone's config, build your own and add things when needed to get a better understanding, in addition to being more prepared for using it in server environments where nothing is configured.
