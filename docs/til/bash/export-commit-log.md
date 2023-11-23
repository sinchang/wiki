# Export the log of all commit messages between two specific dates

```shell
#!/bin/bash

# Set the start and end dates
start_date="2022-01-01"
end_date="2022-12-31"

# Get the list of commits between the two dates
commit_list=$(git log --pretty=format:"%h %s" --since="$start_date" --until="$end_date")

# Export the commit messages to a txt file
echo "$commit_list" > commit_messages.txt

echo "Commit messages exported to commit_messages.txt"
```
