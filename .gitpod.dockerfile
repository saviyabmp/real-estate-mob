FROM gitpod/workspace-full-vnc



#export ANDROID_HOME="/workspace/real-estate-mobile/android-sdk/"
#export PATH="${PATH}:${ANDROID_HOME}tools/:${ANDROID_HOME}platform-tools/"
#build command     tns build ios --emulator
USER gitpod
RUN yes n | npm i @angular/cli
RUN yes n | npm i @nativescript/schematics
RUN yes n | npm i @types/jest
RUN yes n | npm install nativescript -g --unsafe-perm

#export ANDROID_HOME="/workspace/android-sdk/"
#export PATH="${PATH}:${ANDROID_HOME}tools/:${ANDROID_HOME}platform-tools/"
ENV ANDROID_HOME="/workspace/android-sdk/"
ENV PATH="$PATH:$ANDROID_HOME/tools/:$ANDROID_HOME/platform-tools/"


# Give back control
USER root