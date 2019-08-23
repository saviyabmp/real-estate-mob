FROM gitpod/workspace-full



#export ANDROID_HOME="/workspace/real-estate-mobile/android-sdk/"
#export PATH="${PATH}:${ANDROID_HOME}tools/:${ANDROID_HOME}platform-tools/"
#build command     tns build ios --emulator
USER gitpod
RUN npm i @angular/cli
RUN npm i @nativescript/schematics
RUN npm i @types/jest
RUN npm install nativescript -g --unsafe-perm

#export ANDROID_HOME="/workspace/android-sdk/"
#export PATH="${PATH}:${ANDROID_HOME}tools/:${ANDROID_HOME}platform-tools/"
ENV ANDROID_HOME="/workspace/android-sdk/"
ENV PATH="$PATH:$ANDROID_HOME/tools/:$ANDROID_HOME/platform-tools/"


# Give back control
USER root