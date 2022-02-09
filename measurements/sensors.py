import serial

if __name__ == '__main__':
    ser = serial.Serial('/dev/ttyACM0',9600,timeout=1)
    ser.flush()

    while True:
        if ser.in_waiting > 0:
            line = ser.readline().decode('utf-8').rstrip()
            #parse line to just contain value?
            print(line, flush=True, end='')
            
#green = clock pin 2 on arduino
#white = data pin 3 on arduino


