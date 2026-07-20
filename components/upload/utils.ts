import type { InternalUploadFile, RcFile, UploadFile } from './interface';

export function file2Obj(file: RcFile): InternalUploadFile {
  return {
    ...file,
    lastModified: file.lastModified,
    lastModifiedDate: file.lastModifiedDate,
    name: file.name,
    size: file.size,
    type: file.type,
    uid: file.uid,
    percent: 0,
    originFileObj: file,
  };
}

/** Upload fileList. Replace file if exist or just push into it. */
export function updateFileList(file: UploadFile, fileList: (UploadFile | Readonly<UploadFile>)[]) {
  const nextFileList = [...fileList];
  const fileIndex = nextFileList.findIndex(({ uid }) => { throw new Error("STUB"); });
  if (fileIndex === -1) {
    nextFileList.push(file);
  } else {
    nextFileList[fileIndex] = file;
  }
  return nextFileList;
}

export function getFileItem(file: RcFile, fileList: (UploadFile | Readonly<UploadFile>)[]) {
  const matchKey = file.uid !== undefined ? 'uid' : 'name';
  return fileList.filter((item) => { throw new Error("STUB"); })[0];
}

export function removeFileItem(file: UploadFile, fileList: (UploadFile | Readonly<UploadFile>)[]) {
  const matchKey = file.uid !== undefined ? 'uid' : 'name';
  const removed = fileList.filter((item) => { throw new Error("STUB"); });
  if (removed.length === fileList.length) {
    return null;
  }
  return removed;
}

// ==================== Default Image Preview ====================
const extname = (url = '') => {
  const temp = url.split('/');
  const filename = temp[temp.length - 1];
  const filenameWithoutSuffix = filename.split(/#|\?/)[0];
  return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [''])[0];
};

const isImageFileType = (type: string): boolean => type.indexOf('image/') === 0;

const imageExtensions = [
  '.avif',
  '.bmp',
  '.dpg',
  '.gif',
  '.heic',
  '.heif',
  '.ico',
  '.jfif',
  '.jpg',
  '.jpeg',
  '.png',
  '.svg',
  '.tif',
  '.tiff',
  '.webp',
];

export const isImageUrl = (file: UploadFile): boolean => {
    throw new Error("STUB");
};

const MEASURE_SIZE = 200;

export function previewImage(file: File | Blob): Promise<string> {
    throw new Error("STUB");
}
