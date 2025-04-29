10import time

CLEAR = "\033[2J"
CLEAR_AND_RETURN = "\033[H"

def alarm(total_seconds):
    time_elapsed = 0

    print(CLEAR)
    while time_elapsed < total_seconds:
        time.sleep(1)
        time_elapsed += 1

        time_left = total_seconds - time_elapsed
        minutes_left = time_left // 60
        seconds_left = time_left % 60

        print(f"{CLEAR_AND_RETURN}Alarm will sound in: {minutes_left:02d}:{seconds_left:02d}")

    # Play the alarm sound once after countdown
    #("alarm.mp3")

# Get user input
minutes = int(input("How many minutes to wait: "))
seconds = int(input("How many seconds to wait: "))
total_seconds = minutes * 60 + seconds

alarm(total_seconds)
